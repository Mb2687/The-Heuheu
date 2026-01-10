const icons = {
  image: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
  crop: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879-2.879a2 2 0 00-2.828 0L2 12m12.121-5.879L19 12M2 12h10" /></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
  color: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0l-2-2m2 2l2-2m-2 2v-4m2 4h4a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
  text: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  qr: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6.5-5.5l-3-3m5 0l-3 3M4 12H3m10 6.5l-3 3m0-5l3 3m.5-11.5l3-3m-5 0l3 3M3 7h2m9 13v-1M7 3H5m11.5 5.5l3 3m-3-3l-3-3m0 5l3-3" /></svg>`,
  arrows: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 12L3 8m4 8l4-8m-4 8H3m4 0h4m-4 0v4m0-4v-4m0 4v4m0-4H3m4 0h4m4 8v-4m0 4l4-8m-4 8l-4-8m4 8h4m-4 0H7m4 0v4m0-4v-4m0 4v4m0-4h4m-4 0H7" /></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>`,
  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-1-2h4m14-7l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2M5 21v-4m-1-2h4m14-7l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2m-7-9h.01" /></svg>`,
  document: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
  scale: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" /></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`,
}

export const toolCategories = [
  {
    name: "Design & Media",
    tools: [
      { name: "WebP Alchemist", desc: "Client-side PNG/JPG to WebP image conversion with quality control.", link: "/tools/webp-converter", icon: icons.image },
      { name: "Aspect Ratio", desc: "Calculate dimensions for resizing images or elements while maintaining aspect ratio.", link: "/tools/aspect-ratio-calculator", icon: icons.crop },
      { name: "SVG Placeholder", desc: "Generate customizable, lightweight SVG placeholder images for mockups.", link: "/tools/svg-placeholder-maker", icon: icons.code },
      { name: "Color Alchemist", desc: "Convert between HEX, RGB, and HSL color models for CSS and other applications.", link: "/tools/color-hex-alchemist", icon: icons.color }
    ]
  },
  {
    name: "Development",
    tools: [
      { name: "JSON Alchemist", desc: "Parse, validate, and pretty-print JSON data structures for debugging and development.", link: "/tools/json-formatter", icon: icons.code, featured: true },
      { name: "Base64 Alchemist", desc: "Encode and decode strings or files to/from Base64 for data transfer.", link: "/tools/base64-alchemist", icon: icons.text },
      { name: "Unix Timestamp", desc: "Convert Unix epoch timestamps to and from human-readable UTC/local dates.", link: "/tools/unix-timestamp-converter", icon: icons.clock },
      { name: "HTML Entities", desc: "Encode or decode special characters to their corresponding HTML entities.", link: "/tools/html-entity-encoder", icon: icons.code },
      { name: "QR Forge", desc: "Generate static, high-redundancy QR codes from any text or URL.", link: "/tools/qr-code-generator", icon: icons.qr }
    ]
  },
  {
    name: "Text & Data",
    tools: [
      { name: "Case Transformer", desc: "Transform strings between camelCase, PascalCase, snake_case, and kebab-case.", link: "/tools/case-transformer", icon: icons.arrows },
      { name: "List Scrubber", desc: "Perform set operations like deduplication, sorting, and filtering on text lists.", link: "/tools/list-scrubber", icon: icons.list },
      { name: "Whitespace Scrubber", desc: "Remove or identify hidden whitespace characters and trim strings.", link: "/tools/whitespace-remover", icon: icons.sparkle },
      { name: "Lorem Ipsum", desc: "Generate paragraphs, sentences, or words of placeholder text for UI mockups.", link: "/tools/lorem-ipsum-generator", icon: icons.document },
      { name: "Unit Alchemist", desc: "Convert between various metric and imperial units of measurement.", link: "/tools/unit-converter", icon: icons.scale },
      { name: "Password Forge", desc: "Generate strong, cryptographically-random passwords with customizable rules.", link: "/tools/password-forge", icon: icons.lock }
    ]
  }
];
