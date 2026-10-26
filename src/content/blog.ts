export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  source?: { label: string; href: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  sections: BlogSection[];
};

export const GUMROAD_SHOP = "https://ethnicmuse.gumroad.com/";

export const POSTS: BlogPost[] = [
  {
    slug: "why-product-photos-make-or-break-an-ethnic-wear-store",
    title: "Why product photos make or break an ethnic wear store",
    description:
      "A saree is texture, drape and color, so here is why photos carry so much weight for small ethnic wear shops online, and what to fix first",
    date: "2026-10-13",
    readMinutes: 6,
    excerpt:
      "In a shop, a customer can touch the silk\nOnline, the photo has to do that job alone",
    sections: [
      {
        paragraphs: [
          "Picture a small saree shop on a busy market street\nA customer walks in, and the owner pulls a Banarasi silk off the shelf\nShe lets the pallu fall open across the counter\nThe light catches the zari\nThe customer runs a thumb along the border, holds the fabric to her shoulder, and looks in the mirror\nThe sale happens somewhere in those few seconds, and almost none of it is about words",
          "Now picture the same saree on a Shopify product page\nThere is no counter, no mirror, no owner to unfold it\nThere is a photo\nMaybe two\nEverything the customer felt in the shop now has to come through a screen, and the photo is carrying all of it",
          "That is the quiet truth of selling ethnic wear online\nYour photos are not decoration\nThey are the shop counter, the mirror and the owner's hands",
        ],
      },
      {
        heading: "Ethnic wear asks more of a photo than most clothing",
        paragraphs: [
          "A plain cotton shirt is easy to understand from a flat photo\nA saree is not\nIt is six yards or more of fabric that changes completely once it is draped\nThe fall of the pleats, the weight of the pallu, the way a border frames the body\nA folded saree on a white background shows the color and maybe the border\nIt does not show what the customer is really buying, which is how it will look when she wears it",
          "The same goes for lehengas, anarkalis and sherwanis\nEmbroidery, mirror work and zari are tiny details that only show up in sharp, well lit images\nSilk and georgette reflect light differently\nFestive colors like deep maroon, mustard and emerald are easy to get wrong if the lighting is off\nA photo that looks fine for a T shirt can make a beautiful handloom piece look flat and cheap",
        ],
      },
      {
        heading: "What a weak photo costs a small store",
        paragraphs: [
          "Most small shop owners already know their photos could be better\nThe problem is rarely awareness\nIt is budget and time\nA proper shoot means a photographer, a model, a stylist who knows how to drape, a location and editing\nFor a store with a few hundred products and a tight margin, that can feel out of reach",
          "So the shop makes do\nPhone photos on a bedsheet\nA mannequin in the corner of the stockroom\nSupplier images that ten other stores are also using\nNone of these are shameful\nThey are how many good businesses start\nBut they create a few problems that are worth naming honestly",
          "First, trust\nA shopper who cannot see the fabric clearly has to guess, and guessing makes people hesitate\nSecond, sameness\nWhen your product page uses the same supplier photo as another store, the shopper has no reason to pick you\nThird, mismatch\nIf the photo makes a color look brighter than the real piece, you may get the sale and then the return",
        ],
      },
      {
        heading: "The three jobs every product page photo should do",
        paragraphs: [
          "It helps to stop thinking about photos as one thing\nOn a good ethnic wear product page, images usually do three different jobs",
          "The truth photo shows exactly what the customer will receive\nReal color, real fabric, real border\nThis should always be a photo of your actual product\nNo stock image, AI or otherwise, can replace it, and none should try",
          "The detail photo shows craft\nA close shot of the weave, the embroidery, the blouse piece\nThis is often where a customer decides the price is fair",
          "The mood photo shows the feeling\nA woman in a draped saree at a festive gathering, a bride in soft light, a family dressed for Diwali\nThis is the photo that helps a shopper imagine the occasion\nIt does not have to be your exact product, as long as you are clear about what it is",
          "Many small stores have the first kind of photo, struggle with the second, and have almost none of the third\nThat gap is where pages feel empty",
        ],
      },
      {
        heading: "Simple fixes that cost little",
        paragraphs: [
          "Before spending anything, there is a lot you can do with what you have",
          "Shoot your truth photos near a window in daylight, not under yellow room bulbs\nTurn off the flash\nUse a plain wall or a neutral sheet that is ironed\nTake one photo of the full saree folded neatly, one with the pallu open, and one close up of the border\nKeep the same setup for every product so your collection looks consistent",
          "Write honest captions\nIf a color photographs lighter than it looks in person, say so in the description\nShoppers forgive honest notes\nThey do not forgive surprises",
          "Add alt text to your images in Shopify\nA short line like \"Maroon Banarasi silk saree with gold zari border\" helps shoppers using screen readers and gives search engines something to understand",
        ],
      },
      {
        heading: "Where stock and AI images fit, and where they do not",
        paragraphs: [
          "Mood photos are the hardest for a small shop to make, because they need a model, styling and a setting\nThis is where licensed stock can help\nBanners, collection headers, Instagram posts, email headers and festive campaign graphics all benefit from lifestyle images that set the scene",
          "At EthnicMuseWorld, we make AI generated ethnic fashion stock packs for exactly this layer\nWe say clearly that they are AI generated, because they are\nThey are not photos of real people or of your products, so they belong in the mood layer, never in place of your truth photos",
          "Used that way, they can make a page feel complete without a shoot\nUsed the wrong way, as a stand in for the product itself, they would mislead your customer\nThe line is simple\nShow your real product as it is\nUse mood images to tell the story around it",
        ],
      },
      {
        heading: "Start with one page",
        paragraphs: [
          "You do not need to fix the whole store this week\nPick your best selling product\nReshoot its truth photos in daylight\nAdd one detail shot\nAdd one mood image to the collection banner above it\nThen look at the page as a stranger would",
          "If you want to see the kind of mood images we make, you can browse the packs in our Gumroad shop\nIf not, the steps above will still move your store forward, and that is the point",
        ],
      },
    ],
  },
  {
    slug: "preparing-your-saree-shop-for-diwali",
    title: "Preparing your saree shop for Diwali: a calm, practical checklist",
    description:
      "A practical Diwali checklist for small saree and ethnic wear Shopify stores, from collections and photos to shipping cutoffs and festive banners",
    date: "2026-10-13",
    readMinutes: 6,
    excerpt:
      "Diwali shoppers start looking weeks before the festival\nA little planning now saves a lot of panic later",
    sections: [
      {
        paragraphs: [
          "Every year it happens the same way\nIn September, Diwali feels far away\nThen one morning the orders start arriving faster, a customer asks whether her saree will reach before Lakshmi Puja, and you realise your homepage still shows last season's banner",
          "If you run a small ethnic wear store, the festive season can be the busiest time of your year\nIt is also the time when you have the least room to fix things\nThis checklist is meant to help you prepare calmly, in an order that makes sense, with the time you have",
        ],
      },
      {
        heading: "Step one: decide what you are really selling this season",
        paragraphs: [
          "Diwali shoppers are not just buying clothes\nThey are buying an outfit for puja, a gift for a mother, something new for the family photo, a look for a party with friends\nThink about those moments before you think about products",
          "Then build two or three small collections around them\nFor example: festive silk sarees for puja, light georgette and organza sarees for parties, and gift ready pieces under a set price\nShopify collections make this easy, and a shopper who lands on a focused collection has less work to do than one facing your whole catalog",
          "Keep each collection small\nTwelve good pieces are easier to browse than eighty",
        ],
      },
      {
        heading: "Step two: check your stock and your photos together",
        paragraphs: [
          "Go through every product in your festive collections and ask two questions\nDo I actually have this in stock, in the colors listed? And does the photo show it honestly?",
          "Remove or mark anything you cannot ship in time\nNothing hurts trust during the festival like a cancelled order for a Diwali outfit",
          "For photos, make sure each product has at least one clear, daylight photo of the real piece, plus a close up of the border or embroidery\nIf a product only has a supplier photo, consider reshooting it now, before the rush",
        ],
      },
      {
        heading: "Step three: give your store a festive face",
        paragraphs: [
          "Your homepage banner, collection headers and social posts set the mood\nThis is the part shoppers notice first, and the part many small stores leave until the last minute",
          "A festive banner does not need to be complicated\nWarm light, diyas, rich colors, a draped saree, a short line of text and a clear button to the collection\nKeep the text short enough to read on a phone",
          "If you do not have festive lifestyle photos of your own, licensed stock images can fill this role\nEthnicMuseWorld is preparing a limited Diwali set of AI generated festive saree images for this purpose\nWhatever you use, make sure the license covers commercial use on your store and in ads, and be open with customers that the banner image is a mood image, not the product in their cart",
        ],
      },
      {
        heading: "Step four: know your shipping cutoffs, and say them out loud",
        paragraphs: [
          "Look up the delivery times your carrier gives for the places you ship to most\nWork backwards from the festival date and pick a clear last order date for guaranteed delivery\nThen put that date everywhere: a slim announcement bar, product pages, order confirmation emails and social posts",
          "Shoppers are much calmer when they know the deadline\nAnd a clear cutoff saves you from messages asking whether an order placed late will still arrive in time",
          "If you ship internationally, set an earlier cutoff for those orders\nCustoms can add days you do not control",
        ],
      },
      {
        heading: "Step five: prepare your messages before the rush",
        paragraphs: [
          "Write your festive emails and social captions now, while you have time to think\nA few ideas that tend to feel natural rather than pushy:",
          "A styling note for each collection, such as which blouse colors pair well with a particular silk\nA short story about where a weave comes from, for example the heritage of Kanjeevaram or Banarasi silk, written with care and accuracy\nA gentle reminder of your last order date\nA thank you message after the festival, with no sale attached",
          "Avoid fake countdown timers and invented scarcity\nIf only a few pieces are left, say so\nIf not, do not pretend",
        ],
      },
      {
        heading: "Step six: make returns and sizing clear",
        paragraphs: [
          "Festive buyers often order for others, and gifts get exchanged\nCheck that your return and exchange policy is easy to find and written in plain language\nIf you offer blouse stitching or fall and pico finishing, say exactly how long it adds to delivery",
          "For lehengas and readymade blouses, add a simple size chart with measurements, not just S, M and L",
        ],
      },
      {
        heading: "Step seven: leave room to breathe",
        paragraphs: [
          "Plan for the busiest week to be busier than you expect\nPack a supply of boxes, tissue and tape early\nIf someone in the family can help with packing or messages, ask now\nTurn on order notifications on your phone, and set aside a fixed time each day to reply to customers instead of answering all day long",
          "Diwali is meant to be a festival of light for you too\nA store that is prepared lets you enjoy some of it",
        ],
      },
      {
        heading: "A short checklist to print",
        paragraphs: [
          "Two or three focused festive collections\nStock checked and unavailable items removed\nOne honest daylight photo and one detail photo per product\nA festive homepage banner and collection headers\nA clear last order date shown across the store\nFestive emails and captions written in advance\nReturn, exchange and sizing information easy to find\nPacking supplies ready",
          "If you are looking for festive mood images for your banners, you can browse what we have in the EthnicMuseWorld shop on Gumroad\nEither way, we hope your season is bright and busy in the best way",
        ],
      },
    ],
  },
  {
    slug: "using-stock-and-ai-images-honestly-on-shopify",
    title: "How to use stock and AI images honestly on your Shopify store",
    description:
      "Licensing, AI disclosure and the line between mood images and product photos: a plain guide for small ethnic wear stores using stock images",
    date: "2026-10-13",
    readMinutes: 6,
    excerpt:
      "Stock images can help a small store look its best\nUsed carelessly, they can also cost you trust\nHere is where the line sits",
    sections: [
      {
        paragraphs: [
          "Imagine a store owner in her first year online\nShe has beautiful sarees and no photos to match them\nShe finds a few lifestyle images on a free site and puts them on her homepage\nMonths later, she sees the same woman in the same saree on three other stores\nHer shop no longer feels like hers",
          "Stock images, whether photographed or AI generated, are a normal tool for small businesses\nThey can save money and time\nBut they come with two responsibilities that are easy to overlook: using them within their license, and being honest with your customers about what they are",
          "This guide covers both, in plain language\nIt is not legal advice\nFor anything specific to your business, a local professional is the right person to ask",
        ],
      },
      {
        heading: "Part one: understand the license before you upload",
        paragraphs: [
          "Every image you did not make yourself comes with terms\nFree does not mean free of rules\nBefore you use an image, look for a few answers",
          "Can I use it commercially? Selling products, running ads and promoting a business are commercial uses\nSome free images allow this, some do not",
          "Can I use it in paid ads? Some licenses allow website use but limit advertising, or limit the number of impressions",
          "Can I edit it? Adding text, cropping or placing it in a banner design is usually fine, but check",
          "What can I not do? Almost every stock license forbids reselling the images themselves, giving them away as files, or putting them on products like printed merchandise without extra rights",
          "Keep a simple record\nA folder or spreadsheet with each image, where it came from, and a copy or link to its license\nIf anyone ever asks, you can answer in a minute",
          "For our own packs at EthnicMuseWorld, the license covers using the images in brand content such as websites, social posts, ads, lookbooks and client projects\nIt does not allow reselling or redistributing the files themselves\nThe full terms are on each product listing, and you should read them before you buy anything, from us or anyone else",
        ],
      },
      {
        heading: "Part two: never let a mood image pretend to be your product",
        paragraphs: [
          "This is the most important rule in this guide\nA stock image, especially an AI generated one, should never be presented as a photo of the exact item a customer is buying",
          "If a shopper clicks on a green silk saree and sees a model wearing a green silk saree, she will believe that is what arrives\nIf the photo is a stock image of a different saree, she has been misled, even if the colors are close\nThat leads to returns, bad reviews and, in many places, real trouble under consumer protection rules",
          "So keep a clear separation\nProduct photos, the ones in the product image gallery, should show your actual item\nStock images belong in banners, collection headers, blog posts, social media, email headers and campaign graphics, where they set the mood without making a promise about the item",
        ],
      },
      {
        heading: "Part three: be open about AI generated images",
        paragraphs: [
          "AI images have become good enough that many people cannot tell them apart from photos\nThat is exactly why disclosure matters\nCustomers who find out later that an image was AI generated, and was not labelled, often feel tricked, even if nothing else was wrong",
          "Disclosure does not have to be awkward\nA small line in a banner caption, such as \"Illustrative AI generated image\", is enough on a website\nA note in your About page or FAQ that explains you use AI generated lifestyle images for campaigns, and real photos for products, builds trust rather than losing it",
          "Platforms are also moving in this direction\nMeta, for example, explains in its Help Center that ad images created or edited with AI tools can carry an \"AI info\" label\nRules change often, so check the current policy for each platform where you advertise",
          "We follow the same principle ourselves\nEvery EthnicMuseWorld image is AI generated, and we say so on our site and listings\nThe people in them are not real models, and the images depict adults only",
        ],
        source: {
          label: "Meta Help Center: How AI generated images in ads are identified and labeled",
          href: "https://www.meta.com/help/artificial-intelligence/355108217670024/",
        },
      },
      {
        heading: "Part four: respect the culture you are selling",
        paragraphs: [
          "Ethnic wear carries meaning\nA bridal red, a temple border, a specific regional weave\nWhen you choose images, especially AI images, look closely for details that are wrong\nA drape that no real fabric could make, jewelry that looks like a costume, a bindi or sindoor placed carelessly, or a ritual shown in a way that would feel off to someone from that tradition",
          "If something looks wrong to you, it will look wrong to your customers too\nSkip it\nYour audience knows these garments better than any image generator",
        ],
      },
      {
        heading: "Part five: make your store feel like yours",
        paragraphs: [
          "The example at the start of this post has a simple lesson\nImages everyone uses make every store look the same\nA few ways to avoid that:",
          "Pick a consistent color mood for your banners, warm and festive or soft and minimal, and choose images that fit it\nCrop and frame images to match your layout instead of using them as they come\nAdd your own text, logo and colors\nMix stock mood images with real photos from your own packing table, fabric close ups or behind the scenes moments",
          "Stock should support your brand\nIt should not be your brand",
        ],
      },
      {
        heading: "A quick checklist",
        paragraphs: [
          "Commercial use is allowed by the license\nPaid ads are covered if you plan to run them\nYou have a record of where each image came from\nProduct gallery images show your actual products\nAI generated images are labelled or explained\nCultural details look right\nImages are styled to match your brand",
          "If you want lifestyle images made for ethnic wear stores, with clear licensing and honest AI labelling, you are welcome to look through the EthnicMuseWorld packs on Gumroad",
        ],
      },
    ],
  },
  {
    slug: "saree-drapes-and-what-online-buyers-notice",
    title: "A styling guide to saree drapes, and what online buyers notice",
    description:
      "Nivi, Bengali, Gujarati and more: a respectful guide to common saree drapes and the details shoppers look for in product and lifestyle photos",
    date: "2026-10-13",
    readMinutes: 6,
    excerpt:
      "The same saree can tell a different story depending on how it is draped\nYour photos should know which story they are telling",
    sections: [
      {
        paragraphs: [
          "Ask a group of women how they learned to drape a saree, and you will hear a lot of stories\nA mother pinning pleats before a wedding\nAn aunt who could do it in two minutes without a mirror\nA first attempt that came undone halfway through a function\nThe saree is one garment, but the ways of wearing it are many, and each carries a bit of home with it",
          "For anyone selling sarees online, those drapes matter\nThey change how a saree looks, who it speaks to, and what a shopper notices in a photo\nThis guide walks through a few common styles and then turns to the details buyers look for on a product page",
          "There are many more regional drapes than we can cover here, and each community knows its own best\nTreat this as a starting point, not a final word",
        ],
      },
      {
        heading: "A few common drapes",
        paragraphs: [
          "Nivi\nThis is the drape most people picture when they hear the word saree\nIt is widely associated with Andhra Pradesh and has become common across India and the diaspora\nPleats are tucked at the front of the waist, and the pallu goes over the left shoulder, falling down the back\nMost product photos use this drape because it is familiar and shows the pallu clearly",
          "Bengali, or Athpourey\nTraditionally worn with box pleats and the pallu brought over the shoulder from the back to the front\nIt is often seen with red and white sarees like the Garad and during Durga Puja\nIn photos, it shows off a wide border beautifully",
          "Gujarati, or Seedha Pallu\nHere the pallu comes over the right shoulder and is spread across the front of the body\nIt is a natural choice for sarees with a heavily worked pallu, because the design is displayed right at the front",
          "Maharashtrian Nauvari\nA nine yard drape tucked between the legs, similar to a dhoti, which gives freedom of movement\nIt is strongly linked to Maharashtrian identity and festivals\nBecause it is so specific, it deserves care in photography\nIt should look right to someone who has worn it all her life",
          "Coorgi\nFrom the Kodava community in Karnataka, the pleats are at the back and the pallu is draped over the right shoulder\nIt is less often seen online, which is exactly why it can feel special when shown respectfully",
        ],
      },
      {
        heading: "Why the drape in your photos matters",
        paragraphs: [
          "A shopper looking at a photo is quietly asking: is this for me? The drape answers part of that question\nA Bengali bride looking for a red and white saree will connect with a photo that shows the drape she knows\nA shopper buying a party saree may prefer a neat Nivi drape with a pinned pallu",
          "If your store serves a particular community, show drapes that community recognises\nIf your audience is broad, the Nivi drape is a safe default for product photos, and you can show other drapes in lifestyle images or social posts to celebrate the variety",
        ],
      },
      {
        heading: "What online buyers actually look for",
        paragraphs: [
          "Talk to people who buy sarees online, and the same questions come up again and again\nYour photos can answer most of them before anyone has to ask",
          "The border\nShoppers zoom in on the border more than almost anything else\nShow it flat and in full, and show it draped",
          "The pallu\nThis is often the most decorated part\nA photo with the pallu spread open lets the shopper see the full design",
          "The fabric fall\nSilk holds structure\nGeorgette and chiffon flow\nA draped photo shows this in a way a folded one cannot",
          "The blouse piece\nIs there one? Is it attached or separate? What color and design? A quick photo answers this better than a paragraph",
          "The true color\nFestive colors shift easily under bad light\nA daylight photo with a short note about how the color looks in person saves returns",
          "The sheen and texture\nClose ups of zari, weave or embroidery help a shopper judge quality and price",
        ],
      },
      {
        heading: "Styling details that help, and ones that distract",
        paragraphs: [
          "Simple jewelry, like jhumkas or a thin bangle, can complete the look without pulling attention from the saree\nHeavy bridal sets can overwhelm a product photo unless the saree itself is bridal",
          "A clean, ironed drape with neat pleats looks premium\nLoose pleats and a pallu that is pinned unevenly will make even an expensive saree look careless",
          "The background should support the colors, not compete with them\nWarm neutral walls suit most festive sarees\nBusy patterns behind a printed saree make both hard to read",
        ],
      },
      {
        heading: "A word about AI generated saree images",
        paragraphs: [
          "AI image tools have become popular for lifestyle and campaign images, and EthnicMuseWorld makes AI generated saree stock packs ourselves\nWe have learned that saree drapes are one of the hardest things for these tools to get right\nThey can produce pleats that go nowhere, a pallu that merges into a blouse, or a border that changes pattern halfway across",
          "So if you use AI images, ours or anyone else's, look closely\nCheck the pleats, the pallu, the border and the hands\nDiscard anything that a person who drapes sarees would spot as impossible\nAnd always label AI images as such, and keep them out of your product gallery, where only your real saree belongs",
        ],
      },
      {
        heading: "Bring it back to the story",
        paragraphs: [
          "Every saree on your store will one day be draped by someone, for a puja, a wedding, an office party or a quiet family dinner\nYour photos are the first time she imagines that moment\nShow the drape well, show the details she cares about, and she can picture it",
          "If you are looking for festive lifestyle images to set that scene on your banners or social posts, you can browse our packs on Gumroad",
        ],
      },
    ],
  },
  {
    slug: "before-and-after-turning-a-plain-product-page-into-one-that-sells",
    title: "Before and after: turning a plain product page into one that sells",
    description:
      "A walk through rebuilding a plain saree product page on Shopify, step by step, from photos and title to description, trust details and mood images",
    date: "2026-10-13",
    readMinutes: 6,
    excerpt:
      "One product page, rebuilt step by step\nNo magic, just the small changes that help a shopper say yes",
    sections: [
      {
        paragraphs: [
          "Let us take an imaginary product page that many small store owners will recognise\nIt belongs to a made up shop we will call Meera's Sarees\nThe page sells a maroon silk saree with a gold border\nIt has one photo, taken on a bed in the evening\nThe title is \"Silk Saree 0472\"\nThe description says \"Beautiful saree, good quality, free shipping\"",
          "Nothing on that page is wrong, exactly\nThe saree might be lovely\nBut a shopper landing on it has almost nothing to go on\nLet us rebuild it, one change at a time, and look at what each change does",
          "This is an illustrative example, not a real store, and we are not promising any specific result\nEvery store and audience is different\nBut these are the changes that make a page easier to trust",
        ],
      },
      {
        heading: "Before: what the shopper sees",
        paragraphs: [
          "One dim photo with a yellow tint, so the maroon looks brown\nNo close up of the border\nA title that is a stock code\nA description that tells the shopper nothing she can check\nNo mention of the blouse piece, the fabric weight, care, or delivery time\nNo sense of when she might wear it",
          "A shopper in this situation either leaves, or sends a message with five questions\nMany will simply leave",
        ],
      },
      {
        heading: "Change one: the truth photos",
        paragraphs: [
          "The owner reshoots the saree next to a window in daylight\nShe takes four photos with her phone\nThe saree folded neatly to show the body and border\nThe pallu spread open on a plain sheet\nA close up of the gold zari border\nThe blouse piece laid flat",
          "Now the maroon looks like maroon\nThe shopper can see the craft\nMost importantly, every photo in the product gallery is of the real saree she will receive",
        ],
      },
      {
        heading: "Change two: a title a human would search for",
        paragraphs: [
          "\"Silk Saree 0472\" becomes \"Maroon silk saree with gold zari border and blouse piece\"\nIt is longer, but it says what the product is in the words a shopper might type into a search bar\nThe stock code can stay in the SKU field, where it belongs",
        ],
      },
      {
        heading: "Change three: a description that answers questions",
        paragraphs: [
          "The new description starts with one or two warm sentences about the saree and when it might be worn, for example a festive puja or a family wedding\nThen it lists the facts clearly",
          "Fabric and approximate weight\nLength of the saree and whether the blouse piece is included and how long it is\nWhether fall and pico are done\nCare instructions\nA note on color, such as \"the maroon is slightly deeper in person than on most phone screens\"\nShipping time and the return policy, with a link",
          "Each line answers a question the shopper would otherwise have to ask\nHonest notes about color or texture prevent the kind of surprise that leads to a return",
        ],
      },
      {
        heading: "Change four: the alt text and the small details",
        paragraphs: [
          "Each photo gets alt text that describes it, such as \"Close up of gold zari border on maroon silk saree\"\nThis helps shoppers who use screen readers and gives search engines context",
          "The owner also adds a short line under the price about delivery time, and makes sure the size of the blouse piece is easy to spot\nSmall things, but they remove doubt",
        ],
      },
      {
        heading: "Change five: setting the scene, honestly",
        paragraphs: [
          "The product page is now clear and truthful\nWhat it still lacks is feeling\nThe shopper can see the saree, but she cannot yet picture the evening she wears it",
          "This is where a mood image helps, placed above the product grid on the collection page or as a festive banner, not in the product gallery\nMeera's Sarees uses a warm lifestyle image of a woman in a draped silk saree at a Diwali gathering, with a small caption that says it is an illustrative AI generated image",
          "The image sets the tone of the whole collection\nIt does not claim to be this specific saree, and the label makes that clear\nThe product photos underneath do the job of showing exactly what is for sale",
          "This layer is what we make at EthnicMuseWorld\nOur packs are AI generated lifestyle images built for ethnic wear stores, and we label them as AI generated\nThey work for banners, collection headers, social posts and emails\nThey are not a replacement for photos of your real products, and we would never suggest using them that way",
        ],
      },
      {
        heading: "Change six: a little social proof, only if it is real",
        paragraphs: [
          "If the store has genuine reviews, showing them near the product helps\nIf a customer has sent a photo of herself wearing the saree and agreed to share it, that is wonderful content\nIf there are no reviews yet, the page should simply go without\nInvented reviews damage trust far more than an empty review section, and are against the rules on most platforms",
        ],
      },
      {
        heading: "After: what the shopper sees now",
        paragraphs: [
          "A clear title\nFour honest daylight photos of the real saree, including the border, pallu and blouse piece\nA description that answers her questions before she asks them\nDelivery and returns in plain view\nA warm festive banner on the collection that helps her imagine the occasion, labelled honestly",
          "None of these changes needed a professional shoot\nMost needed a phone, a window and an afternoon",
        ],
      },
      {
        heading: "Try it on one page",
        paragraphs: [
          "Choose one product, ideally one that gets visits but few sales, and work through the six changes\nThen compare the before and after side by side\nYou will likely see things you never noticed while looking at your store every day",
          "If you would like lifestyle images for the mood layer, you can browse the EthnicMuseWorld packs on Gumroad\nAnd if you decide to build that layer some other way, the steps above still apply",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
