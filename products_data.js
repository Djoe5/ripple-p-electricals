const productsData = [
        {
                "id": 1,
                "name": "RFCH20055-500 Round Gold Crystal Chandelier",
                "category": "Chandeliers",
                "type": "Luxury Crystal",
                "desc": "Grand 500mm circular chandelier featuring layered K9 crystals encased in a sculpted ornate gold band.",
                "img": "photos/1. Chandeliers/crystal-round-gold-chandelier-rfch20055-500.jpeg"
        },
        {
                "id": 2,
                "name": "RFCH20056-400 Tiered Crystal Gold Chandelier",
                "category": "Chandeliers",
                "type": "Luxury Crystal",
                "desc": "Sophisticated 400mm circular gold chandelier with cascading multi-tier sparkling crystal prisms.",
                "img": "photos/1. Chandeliers/crystal-round-gold-chandelier-rfch20056-400.jpeg"
        },
        {
                "id": 3,
                "name": "Modern Orbital Ring & Globe Chandelier",
                "category": "Chandeliers",
                "type": "Contemporary LED",
                "desc": "Striking architectural ring chandelier with suspended spherical frosted globes and black/gold finish.",
                "img": "photos/1. Chandeliers/modern-circular-ring-globe-chandelier.jpeg"
        },
        {
                "id": 4,
                "name": "Vintage Wooden Beam 6-Rope Chandelier (D021-6)",
                "category": "Chandeliers",
                "type": "Rustic / Vintage",
                "desc": "Rustic solid wooden beam wrapped in natural hemp ropes with 6 Edison bulb pendant drops.",
                "img": "photos/1. Chandeliers/wooden-beam-6-rope-chandelier-d021-6.jpeg"
        },
        {
                "id": 5,
                "name": "Vintage Wooden Beam 5-Rope Chandelier (D019-5)",
                "category": "Chandeliers",
                "type": "Rustic / Vintage",
                "desc": "Natural wood bar chandelier with 5 wound thick rope drops and protective metal bulb cages.",
                "img": "photos/1. Chandeliers/wooden-beam-5-rope-chandelier-d019-5.jpeg"
        },
        {
                "id": 6,
                "name": "Linear 4-Cage Black Island Chandelier",
                "category": "Chandeliers",
                "type": "Industrial Island",
                "desc": "Matte black linear ceiling fixture with 4 geometric frame cages. Ideal for dining tables & kitchen islands.",
                "img": "photos/1. Chandeliers/linear-4-cage-island-chandelier.jpeg"
        },
        {
                "id": 7,
                "name": "RFCH20056-500 Grand Crystal Gold Chandelier",
                "category": "Chandeliers",
                "type": "Luxury Crystal",
                "desc": "500mm diameter high-end crystal chandelier with brilliant warm illumination and crown metal border.",
                "img": "photos/1. Chandeliers/crystal-round-gold-chandelier-rfch20056-500.jpeg"
        },
        {
                "id": 8,
                "name": "Modern Vertical Acrylic LED Wall Bracket (28x8cm)",
                "category": "Wall Brackets",
                "type": "LED Wall Sconce",
                "desc": "Sleek 28cm curved clear acrylic sconce with laser-etched light guides and matte black wall mount.",
                "img": "photos/2. Wall Brackets/vertical-acrylic-led-wall-bracket-28x8cm.jpeg"
        },
        {
                "id": 9,
                "name": "Curved Ribbon Gold LED Wall Bracket",
                "category": "Wall Brackets",
                "type": "Designer Sconce",
                "desc": "Artistic golden wave LED wall light providing ambient textured indirect lighting for lounges.",
                "img": "photos/2. Wall Brackets/modern-curved-gold-led-wall-bracket.jpeg"
        },
        {
                "id": 10,
                "name": "Modern Double Spiral LED Wall Sconce (Gold/White)",
                "category": "Wall Brackets",
                "type": "Spiral Sconce",
                "desc": "Dual intertwined helical ribbons in satin gold and white with high-efficiency diffused warm LED.",
                "img": "photos/2. Wall Brackets/double-spiral-wall-bracket-gold-white.jpeg"
        },
        {
                "id": 11,
                "name": "Modern Double Spiral LED Wall Sconce (Black/Gold)",
                "category": "Wall Brackets",
                "type": "Spiral Sconce",
                "desc": "Matte black and gold dual helix wall bracket creating a stunning modern statement on any wall.",
                "img": "photos/2. Wall Brackets/double-spiral-wall-bracket-black-gold.jpeg"
        },
        {
                "id": 12,
                "name": "Twin Glass Cylinder Wall Sconce",
                "category": "Wall Brackets",
                "type": "Glass Sconce",
                "desc": "Double clear ribbed glass cylinder sconces with exposed warm filaments on matte black armature.",
                "img": "photos/2. Wall Brackets/double-glass-cylinder-wall-sconce.jpeg"
        },
        {
                "id": 13,
                "name": "Luxury Crystal Torch Wall Bracket",
                "category": "Wall Brackets",
                "type": "Crystal Sconce",
                "desc": "Torch-style multifaceted crystal wall sconce that casts brilliant radiant light patterns across corridors.",
                "img": "photos/2. Wall Brackets/crystal-torch-luxury-wall-bracket.jpeg"
        },
        {
                "id": 14,
                "name": "Architectural Up & Down Wall Light",
                "category": "Wall Brackets",
                "type": "Minimal Sconce",
                "desc": "Minimalist rectangular wall bracket casting bidirectional warm light wash up and down interior surfaces.",
                "img": "photos/2. Wall Brackets/up-down-glowing-minimal-wall-sconce.jpeg"
        },
        {
                "id": 15,
                "name": "Playful Monkey Wall Sconce Lamp",
                "category": "Wall Brackets",
                "type": "Novelty Sconce",
                "desc": "Characterful sculpted climbing monkey wall bracket holding an exposed filament tube lamp.",
                "img": "photos/2. Wall Brackets/monkey-wall-bracket-lamp-black.jpeg"
        },
        {
                "id": 16,
                "name": "Triple Glass Globe Linear Island Pendant",
                "category": "Hanging Lights",
                "type": "Pendant Set",
                "desc": "3 suspended amber glass globes mounted on a streamlined matte black horizontal ceiling track.",
                "img": "photos/3. Hanging Lights/3-globe-glass-linear-pendant-light.jpeg"
        },
        {
                "id": 17,
                "name": "Triple Glass Globe Cluster Pendant (Round Canopy)",
                "category": "Hanging Lights",
                "type": "Pendant Set",
                "desc": "Staggered trio of translucent glass sphere pendants suspended from a central round ceiling plate.",
                "img": "photos/3. Hanging Lights/3-globe-glass-round-pendant-light.jpeg"
        },
        {
                "id": 18,
                "name": "Smoke Glass Globe Single Pendant Light",
                "category": "Hanging Lights",
                "type": "Single Pendant",
                "desc": "Modern gradient smoked glass globe with black cap, perfect for bar counters and bedside corners.",
                "img": "photos/3. Hanging Lights/smoke-glass-globe-single-pendant.jpeg"
        },
        {
                "id": 19,
                "name": "White Geometric Cage Pendant (GPDL-8623-1 WH)",
                "category": "Hanging Lights",
                "type": "Wire Pendant",
                "desc": "Crossed wire geometric cylinder in clean white finish enclosing a clear glass hurricane shade.",
                "img": "photos/3. Hanging Lights/white-wire-cylinder-pendant-gpdl-8623-1-wh.jpeg"
        },
        {
                "id": 20,
                "name": "White Diamond Geometric Pendant (GPDL-8625-1 WH)",
                "category": "Hanging Lights",
                "type": "Wire Pendant",
                "desc": "Sculpted diamond lattice cage pendant light in crisp powder-coated white with gold interior socket.",
                "img": "photos/3. Hanging Lights/white-diamond-cage-pendant-gpdl-8625-1-wh.jpeg"
        },
        {
                "id": 21,
                "name": "White Slotted Lantern Pendant (GPDL-8618-1 WH)",
                "category": "Hanging Lights",
                "type": "Geometric Lantern",
                "desc": "Contemporary rectangular slotted lantern pendant casting patterned shadows and ambient glow.",
                "img": "photos/3. Hanging Lights/white-geometric-lantern-pendant-gpdl-8618-1-wh.jpeg"
        },
        {
                "id": 22,
                "name": "Linear 3-Light Cage & Timber Island Pendant",
                "category": "Hanging Lights",
                "type": "Wood & Wire",
                "desc": "Black cylindrical wire cages with genuine natural wood ring collars on a triple bar suspension.",
                "img": "photos/3. Hanging Lights/3-light-cage-wood-linear-pendant.jpeg"
        },
        {
                "id": 23,
                "name": "Trio Designer Black & Gold Pendant Set",
                "category": "Hanging Lights",
                "type": "Designer Pendant",
                "desc": "Three complementary geometric wire and sphere pendant lights with luxurious brass gold accents.",
                "img": "photos/3. Hanging Lights/trio-decorative-black-gold-pendants.jpeg"
        },
        {
                "id": 24,
                "name": "Panda Climbing Rope Pendant Light",
                "category": "Hanging Lights",
                "type": "Novelty Pendant",
                "desc": "Whimsical climbing panda holding a downward spotlight while hanging on a sturdy thick rope.",
                "img": "photos/3. Hanging Lights/panda-hanging-rope-pendant-light.jpeg"
        },
        {
                "id": 25,
                "name": "Golden Monkey Hanging Rope Pendant Light",
                "category": "Hanging Lights",
                "type": "Novelty Pendant",
                "desc": "Sculpted metallic gold monkey suspended on rope holding an adjustable spotlight.",
                "img": "photos/3. Hanging Lights/gold-monkey-hanging-rope-pendant-light.jpeg"
        },
        {
                "id": 26,
                "name": "MOONLIGHT VIP Luxury Switch & Socket Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Champagne ivory body framed with a mirror-finish gold chrome beveled rim. Complete matching set.",
                "img": "photos/4. Sockets and Switches VIP/moonlight-gold-trim-vip-switches.jpeg"
        },
        {
                "id": 27,
                "name": "PURPLE VIP Modern Switch & Socket Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Soft slate grey faceplates framed with opulent gold trims. 1-4 gang, 13A twin sockets & cooker units.",
                "img": "photos/4. Sockets and Switches VIP/purple-gold-trim-vip-switches.jpeg"
        },
        {
                "id": 28,
                "name": "C75 GOLD / Gold Chrome VIP Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Full gold metallic faceplates with matching gold bevel trims for ultra-luxurious interiors.",
                "img": "photos/4. Sockets and Switches VIP/c75-gold-chrome-vip-switches.jpeg"
        },
        {
                "id": 29,
                "name": "C85 GREY BRUSHED VIP Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Brushed titanium grey textures providing subtle elegance, scratch resistance, and modern aesthetics.",
                "img": "photos/4. Sockets and Switches VIP/c85-grey-brushed-vip-switches.jpeg"
        },
        {
                "id": 30,
                "name": "W1 GREY ACRYLIC VIP Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Gloss acrylic finish in modern neutral grey with smooth mechanical switches and neon indicators.",
                "img": "photos/4. Sockets and Switches VIP/w1-grey-acrylic-vip-switches.jpeg"
        },
        {
                "id": 31,
                "name": "X10 BLACK / Gold Chrome VIP Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Deep matte black finish accented with bright gold chrome borders. High-contrast luxury.",
                "img": "photos/4. Sockets and Switches VIP/x10-black-gold-chrome-vip-switches.jpeg"
        },
        {
                "id": 32,
                "name": "X71 BLACK / Gun Chrome VIP Series",
                "category": "Sockets & Switches VIP",
                "type": "VIP Series",
                "desc": "Understated midnight black paired with polished gunmetal chrome borders for executive spaces.",
                "img": "photos/4. Sockets and Switches VIP/x71-black-gun-chrome-vip-switches.jpeg"
        },
        {
                "id": 33,
                "name": "Luxury Metallic Dual Sockets & Switch Modules",
                "category": "Sockets & Switches VIP",
                "type": "Premium Sockets",
                "desc": "Modular 13A twin switched sockets with red status rockers and solid brushed metallic faceplates.",
                "img": "photos/4. Sockets and Switches VIP/luxury-metallic-dual-socket-switches.jpeg"
        },
        {
                "id": 34,
                "name": "Modular Silver-Grey Switches & Sockets Set",
                "category": "Sockets & Switches VIP",
                "type": "Modular Series",
                "desc": "High-durability residential and commercial switches with clean frameless modular layout.",
                "img": "photos/4. Sockets and Switches VIP/modern-modular-silver-grey-switches.jpeg"
        },
        {
                "id": 35,
                "name": "Magnetic Track Linear Flood Module (CV21 FGD 300)",
                "category": "Magnetic Track & Profiles",
                "type": "Track Module",
                "desc": "Snap-in magnetic low-voltage linear LED light bar providing smooth 120\u00b0 diffused floodlighting.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-linear-flood-cv21-fgd-300.jpeg"
        },
        {
                "id": 36,
                "name": "20W Foldable Magnetic Track Spotlight",
                "category": "Magnetic Track & Profiles",
                "type": "Track Spotlight",
                "desc": "Heavy-duty 20W magnetic spotlight with 90\u00b0 folding arm and 360\u00b0 rotation for directional accent lighting.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-20w-foldable-spotlight.jpeg"
        },
        {
                "id": 37,
                "name": "Magnetic Track Cylindrical Pendant Spotlight",
                "category": "Magnetic Track & Profiles",
                "type": "Track Pendant",
                "desc": "Suspended cylindrical track head that snaps into the track channel for focused task illumination.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-cylindrical-pendant-spotlight.jpeg"
        },
        {
                "id": 38,
                "name": "Magnetic Track Multi-Spot Linear Grille",
                "category": "Magnetic Track & Profiles",
                "type": "Anti-Glare Grille",
                "desc": "Recessed micro-reflector grille module eliminating glare while delivering high-intensity pinpoint light.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-multi-spot-linear-grille.jpeg"
        },
        {
                "id": 39,
                "name": "Magnetic Flexible & Angle Connectors",
                "category": "Magnetic Track & Profiles",
                "type": "Connectors",
                "desc": "Flexible joints and recessed 90\u00b0 corner connectors for continuous seamless ceiling-to-wall track runs.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-flexible-angle-connector.jpeg"
        },
        {
                "id": 40,
                "name": "Recessed Channel Aluminium Profile Extrusions",
                "category": "Magnetic Track & Profiles",
                "type": "Profile Channel",
                "desc": "Anodized architectural aluminium channel extrusions with frosted diffusers for flush ceiling LED strips.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/aluminium-profile-recessed-channel-extrusion.jpeg"
        },
        {
                "id": 41,
                "name": "Staircase LED Profile Installation",
                "category": "Magnetic Track & Profiles",
                "type": "Installation Showcase",
                "desc": "Real installation showcasing vertical and step-edge aluminium profile LED strips in modern stairs.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/aluminium-profile-staircase-led-strip-install.jpeg"
        },
        {
                "id": 42,
                "name": "Recessed Track Living Room Ceiling System",
                "category": "Magnetic Track & Profiles",
                "type": "Installation Showcase",
                "desc": "Architectural magnetic track system installed in geometric rectangular recessed patterns.",
                "img": "photos/5. Magnetic Track Lights and Aluminium Profiles/magnetic-track-living-room-ceiling-layout.jpeg"
        },
        {
                "id": 43,
                "name": "Dual-Color Rim-Glow Surface LED Panel Lights",
                "category": "Panel Lights",
                "type": "Surface Panel",
                "desc": "Decorative round LED panel light featuring dual illumination: center daylight with vibrant blue/gold outer halo.",
                "img": "photos/6. Panel Lights/dual-color-rim-glow-surface-panel-lights.jpeg"
        },
        {
                "id": 44,
                "name": "Round Surface-Mount LED Panel Light",
                "category": "Panel Lights",
                "type": "Surface Panel",
                "desc": "Ultra-bright frosted diffuser panel for ceiling surface installation without requiring cut-outs.",
                "img": "photos/6. Panel Lights/round-surface-led-panel-light.jpeg"
        },
        {
                "id": 45,
                "name": "Slim-Rim Recessed Round LED Panel",
                "category": "Panel Lights",
                "type": "Recessed Panel",
                "desc": "Micro-bezel downlight panel providing wide 160\u00b0 diffuse beam angle for general room lighting.",
                "img": "photos/6. Panel Lights/round-slim-rim-led-panel-light.jpeg"
        },
        {
                "id": 46,
                "name": "Deep Anti-Glare Recessed Spotlight Fitting",
                "category": "Panel Lights",
                "type": "Spotlight Fitting",
                "desc": "Deep black recessed funnel fitting with bright orange spring clips to minimize visual eye glare.",
                "img": "photos/6. Panel Lights/deep-black-recessed-downlight-spot-fitting.jpeg"
        },
        {
                "id": 47,
                "name": "ATTA RH-MH6 Triple Square Spotlight Fitting",
                "category": "Panel Lights",
                "type": "Multi-Spot Fitting",
                "desc": "Commercial 3-lamp square recessed fixture with dual-tone black frame and gold inner reflector rings.",
                "img": "photos/6. Panel Lights/atta-spotlight-fitting-triple-square-rh-mh6.jpeg"
        },
        {
                "id": 48,
                "name": "Square Double Spotlight Fitting (Black & Gold)",
                "category": "Panel Lights",
                "type": "Multi-Spot Fitting",
                "desc": "Dual spotlight housing in textured matte black with warm gold reflector trims. Fits standard spots.",
                "img": "photos/6. Panel Lights/square-double-spotlight-fitting-black-gold.jpeg"
        },
        {
                "id": 49,
                "name": "Square Double Spotlight Fitting (Pure White)",
                "category": "Panel Lights",
                "type": "Multi-Spot Fitting",
                "desc": "Clean white 2-lamp recessed spotlight fitting blending seamlessly with gypsum plasterboard ceilings.",
                "img": "photos/6. Panel Lights/square-double-spotlight-fitting-white.jpeg"
        },
        {
                "id": 50,
                "name": "Tricolor 3-in-1 LED Downlight",
                "category": "Panel Lights",
                "type": "Tricolor Downlight",
                "desc": "Switchable color temperatures: Warm White (3000K), Daylight (4000K), and Cool White (6500K) in one unit.",
                "img": "photos/6. Panel Lights/tricolor-led-downlight-3000k-4000k-6500k.jpeg"
        },
        {
                "id": 51,
                "name": "Round COB LED Spotlights in White & Black",
                "category": "Panel Lights",
                "type": "COB Downlight",
                "desc": "High-lumen COB chip recessed downlights with aluminum heatsink and directional eyeball tilt.",
                "img": "photos/6. Panel Lights/round-cob-led-spotlights-white-black.jpeg"
        },
        {
                "id": 52,
                "name": "GU10 Directional Spotlight Fittings",
                "category": "Panel Lights",
                "type": "GU10 Fittings",
                "desc": "Universal GU10 lamp holders in round & square profiles with anti-glare recessed baffles.",
                "img": "photos/6. Panel Lights/gu10-spotlight-fittings-round-square.jpeg"
        },
        {
                "id": 53,
                "name": "Golden Monkey Table Lamp with Filament Bulb",
                "category": "Decorative & Table Lamps",
                "type": "Table Lamp",
                "desc": "Cast metallic gold monkey statue standing on pedestal base holding an upright vintage LED lamp.",
                "img": "photos/7. Decorative and Table Lamps/gold-monkey-table-lamp.jpeg"
        },
        {
                "id": 54,
                "name": "Black Monkey Table Lamp with Globe Bulb",
                "category": "Decorative & Table Lamps",
                "type": "Table Lamp",
                "desc": "Playful matte black monkey table figurine holding an oversized exposed filament globe bulb.",
                "img": "photos/7. Decorative and Table Lamps/black-monkey-table-lamp-globe-bulb.jpeg"
        },
        {
                "id": 55,
                "name": "RFC270272-300 Round Crystal Ring Chandelier",
                "category": "Chandeliers",
                "type": "Luxury Crystal Ring",
                "desc": "Grand 300mm circular chandelier adorned with double-layered faceted K9 crystals and warm gold rim lighting.",
                "img": "photos/1. Chandeliers/crystal-ring-chandelier-rfc270272-300.jpeg"
        },
        {
                "id": 56,
                "name": "RFC270313-400 Frosted Ice Crystal Ring Chandelier",
                "category": "Chandeliers",
                "type": "Ice Crystal Ring",
                "desc": "Stunning 400mm halo chandelier encrusted with textured frosted ice crystal baguettes and embedded warm ambient LED glow.",
                "img": "photos/1. Chandeliers/ice-crystal-ring-chandelier-rfc270313-400.jpeg"
        },
        {
                "id": 57,
                "name": "CH20001 Luxury Black & Gold Crystal Island Chandelier",
                "category": "Chandeliers",
                "type": "Tiered Crystal Island",
                "desc": "Grand 800x300mm oval/rectangular chandelier featuring dual-tone matte black & gold fluted collar with cascading tiered crystal prisms.",
                "img": "photos/1. Chandeliers/luxury-black-gold-crystal-chandelier-ch20001.jpeg"
        },
        {
                "id": 58,
                "name": "RFCH80032-1P Geometric Black & Timber Pendant Light",
                "category": "Hanging Lights",
                "type": "Cage Pendant",
                "desc": "Black metal cylindrical geometric cage pendant with natural turned timber accents and warm inner glass hurricane tube.",
                "img": "photos/3. Hanging Lights/geometric-black-timber-pendant-rfch80032-1p.jpeg"
        },
        {
                "id": 59,
                "name": "RFCH80029 Gold Geometric Cage Pendant Light",
                "category": "Hanging Lights",
                "type": "Gold Pendant",
                "desc": "Polished satin gold chevron geometric cage pendant light featuring amber glass hurricane sleeve and exposed warm filament bulb.",
                "img": "photos/3. Hanging Lights/gold-geometric-cage-pendant-rfch80029.jpeg"
        },
        {
                "id": 60,
                "name": "RFC230014-1P Curved Diamond Lattice Pendant Light",
                "category": "Hanging Lights",
                "type": "Cage Pendant",
                "desc": "Modern matte black pendant light featuring curved criss-cross diamond ribbon cage, timber finial, and amber glass cylinder.",
                "img": "photos/3. Hanging Lights/curved-lattice-pendant-rfc230014-1p.jpeg"
        },
        {
                "id": 61,
                "name": "RFC230015-1P Mandala Cutout Black Pendant Light",
                "category": "Hanging Lights",
                "type": "Designer Pendant",
                "desc": "Artistic matte black cylindrical pendant with laser-cut floral mandala pattern, crystal neck spacer, and amber glass insert.",
                "img": "photos/3. Hanging Lights/mandala-cutout-pendant-rfc230015-1p.jpeg"
        },
        {
                "id": 62,
                "name": "TRONIC Flame Retardant Single-Core Building Wire (1.5mm² / 2.5mm²)",
                "category": "Electrical Wires & Cables",
                "type": "Building Wire",
                "desc": "High-conductivity pure copper 90m coils with flame-retardant PVC insulation. Ideal for residential & commercial conduit wiring.",
                "img": "photos/8. Electrical Wires and Cables/tronic-single-core-building-wire-coils.jpeg"
        },
        {
                "id": 63,
                "name": "Heavy-Duty PVC Conduit Fittings & Pattress Boxes",
                "category": "Electrical Wires & Cables",
                "type": "Conduit & Enclosures",
                "desc": "Complete conduit accessories set: circular junction boxes (2-way & 4-way), switch/socket pattress boxes, and inspection elbows.",
                "img": "photos/8. Electrical Wires and Cables/pvc-conduit-fittings-junction-pattress-boxes.jpeg"
        },
        {
                "id": 64,
                "name": "HTG Single-Core PVC Insulated Building Wire Coils",
                "category": "Electrical Wires & Cables",
                "type": "Building Wire",
                "desc": "Certified HTG copper conduit cables in standard 1.5mm² lighting and 2.5mm² power socket sizes. 90m rolls in red and black.",
                "img": "photos/8. Electrical Wires and Cables/htg-single-core-electrical-building-wire.jpeg"
        },
        {
                "id": 65,
                "name": "Masai Cables FRLS Domestic Wiring Cable (1.5mm² / 2.5mm²)",
                "category": "Electrical Wires & Cables",
                "type": "FRLS Cable",
                "desc": "Flame Retardant Low Smoke (FRLS) domestic copper wiring cables. 90m coils available in Red, Blue, Black, and Earth Green/Yellow.",
                "img": "photos/8. Electrical Wires and Cables/masai-cables-frls-domestic-wire-rolls.jpeg"
        },
        {
                "id": 66,
                "name": "Masai Cables 6.0mm² Heavy-Duty Cooker & Mains Cable",
                "category": "Electrical Wires & Cables",
                "type": "Heavy-Duty Cable",
                "desc": "6.0 SQ. MM 90m high-amp copper cable rated 450/750V for electric cookers, instant water heaters, and main distribution boards.",
                "img": "photos/8. Electrical Wires and Cables/masai-cables-6mm-heavy-duty-frls-cable.jpeg"
        },
        {
                "id": 67,
                "name": "ASL (Ramco Group) 1.5mm² Flame Retardant Building Wire",
                "category": "Electrical Wires & Cables",
                "type": "Building Wire",
                "desc": "KEBS & IEC standard certified 1.5mm² pure copper conduit wire by ASL Ramco Group for lighting circuits and switches.",
                "img": "photos/8. Electrical Wires and Cables/asl-ramco-1-5mm-flame-retardant-wire.jpeg"
        },
        {
                "id": 68,
                "name": "Coast Cables 1.5mm² KEBS-Approved Conduit Wire",
                "category": "Electrical Wires & Cables",
                "type": "Building Wire",
                "desc": "KEBS approved 1.5mm² copper domestic electrical wire by Coast Cables Ltd. High insulation resistance and durable PVC coating.",
                "img": "photos/8. Electrical Wires and Cables/coast-cables-1-5mm-kebs-approved-wire.jpeg"
        }
];