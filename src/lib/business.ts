export const business = {
  name: "Khursheed Ashraf",
  fullName: "Khursheed Ashraf Car Wash & Oil Change",
  shortName: "Khursheed Ashraf Car Wash",
  phoneDisplay: "0335 1276515",
  phoneHref: "tel:+923351276515",
  whatsappNumber: "923351276515",
  whatsappHref: "https://wa.me/923351276515",
  email: "hello@khursheedashraf.pk",
  addressShort: "Jheel Park Rd, Block 2 P.E.C.H.S.",
  addressLine: "V3C6+JXQ, Jheel Park Rd, Block 2 P.E.C.H.S., Karachi, Pakistan",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=Khursheed+Ashraf+Car+Wash+And+Oil+Change+Jheel+Park+Rd+Block+2+P.E.C.H.S.+Karachi",
  mapEmbedHref:
    "https://www.google.com/maps?q=Khursheed%20Ashraf%20Car%20Wash%20And%20Oil%20Change%2C%20Jheel%20Park%20Rd%2C%20Block%202%20P.E.C.H.S.%2C%20Karachi&output=embed",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  priceRange: "PKR 1,500 – 7,500",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Oil Change", href: "#oil-change" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const formatPKR = (value: number) => `Rs. ${value.toLocaleString("en-PK")}`;
