export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://www.sophiasakupwanya.org/#organization",
    name: "Life Giving Foundation",
    alternateName: [
      "Life Giving Foundation Zimbabwe",
      "LGF",
      "Sophia Sakupwanya Foundation",
      "Life Giving Fountation",
    ],
    url: "https://www.sophiasakupwanya.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sophiasakupwanya.org/images/logo/logo.jpeg",
      width: 512,
      height: 512,
    },
    image: "https://www.sophiasakupwanya.org/images/logo/logo.jpeg",
    description:
      "Life Giving Foundation is a faith-inspired humanitarian organization founded by Sophia Sakupwanya, dedicated to empowering communities, transforming lives, and bringing light to those in need through education, healthcare, and community development in Zimbabwe and beyond.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      "@id": "https://www.sophiasakupwanya.org/#founder",
      name: "Sophia Sakupwanya",
      jobTitle: "Founder & Director",
      url: "https://www.sophiasakupwanya.org/about",
      sameAs: [],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mungate Business Center",
      addressLocality: "Domboshava",
      addressCountry: "ZW",
    },
    telephone: "+263715861986",
    email: "info@sophiasakupwanya.org",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+263715861986",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [],
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    knowsAbout: [
      "Community Development",
      "Education",
      "Healthcare",
      "Humanitarian Aid",
      "Faith-Based Charity",
      "Child Welfare",
      "Rural Development",
    ],
    slogan: "Let There Be Light",
    nonprofitStatus: "Nonprofit501c3",
    keywords:
      "Sophia Sakupwanya, Life Giving Foundation, humanitarian, charity, Zimbabwe, community development, education, healthcare, faith-based organization, donate, volunteer, nonprofit",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sophiasakupwanya.org/#website",
    url: "https://www.sophiasakupwanya.org",
    name: "Life Giving Foundation",
    alternateName: [
      "Sophia Sakupwanya Foundation",
      "LGF",
      "Life Giving Foundation Zimbabwe",
    ],
    description:
      "Official website of Life Giving Foundation, a faith-inspired humanitarian organization founded by Sophia Sakupwanya. Empowering communities through education, healthcare, and development.",
    publisher: {
      "@id": "https://www.sophiasakupwanya.org/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.sophiasakupwanya.org/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function DonateActionJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Donate to Life Giving Foundation",
    description:
      "Support the Life Giving Foundation's humanitarian work in education, healthcare, and community development in Zimbabwe.",
    recipient: {
      "@id": "https://www.sophiasakupwanya.org/#organization",
    },
    url: "https://www.sophiasakupwanya.org/donate",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
