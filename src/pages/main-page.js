import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"

// Styled Components
const PageContainer = styled.div`
  font-family: "Rubik", sans-serif;
  color: #333;
  direction: rtl;
  background: #bdf1ff;
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

const HeroTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: 220px 1fr auto;
  align-items: start;
  gap: 16px;
  padding: 14px 18px;

  @media (max-width: 900px) {
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto auto;
    align-items: center;
  }
`

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

const LogoWrap = styled.div`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`

const LogoImg = styled.img`
  width: 220px;
  height: auto;
  display: block;

  @media (max-width: 900px) {
    width: 170px;
  }
`

const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 22px 16px 12px;
  background: #bdf1ff;
  flex-wrap: wrap;
`

const ContactIconLink = styled.a`
  display: inline-flex;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #ffffff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow:
    0 10px 22px rgba(0,0,0,0.12),
    0 1px 0 rgba(255,255,255,0.8) inset;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 14px 28px rgba(0,0,0,0.16),
      0 1px 0 rgba(255,255,255,0.8) inset;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }
`

const ContactIconImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 0;
`

const InstagramIconDark = styled.svg`
  width: 40px;
  height: 40px;
  display: block;
`

const ContactPhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 64px;
  padding: 0 18px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #ffffff;
  box-shadow:
    0 10px 22px rgba(0,0,0,0.12),
    0 1px 0 rgba(255,255,255,0.8) inset;
  text-decoration: none;
  color: #111;
  font-weight: 800;
  font-size: 1.15rem;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 14px 28px rgba(0,0,0,0.16),
      0 1px 0 rgba(255,255,255,0.8) inset;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    height: 56px;
    border-radius: 18px;
    padding: 0 14px;
    font-size: 1.05rem;
  }
`

const ContactPhoneIcon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(0,0,0,0.06);
  font-size: 20px;
  line-height: 1;
`

// (Upper phone removed - phone remains near the contact icons row)

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  object-position: center 65%;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: yellow;
  padding: 20px;
`

const HeroTitle = styled.h1`
  font-size: 5.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  color: #ffc74c;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  color: #ffc74c;
  line-height: 1.2;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;

  @media (max-width: 480px) {
    font-size: 1.15rem;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    padding: 0 10px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px 16px 26px;
  background-color: #bdf1ff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`

const FilterButton = styled.button`
  background: ${props => props.active ? '#333' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid #333;
  padding: 10px 26px;
  margin: 6px 8px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: #333;
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 8px 14px;
    font-size: 0.9rem;
    margin: 5px;
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px 5vw;
  background-color: #bdf1ff;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`

const CardImage = styled.div`
  height: 250px;
  background-color: #eee;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
`

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #222;
`

const CardCategory = styled.span`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const CardId = styled.span`
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 5px;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  align-self: center;
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.72);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
`

const ModalContent = styled.div`
  position: relative;
  width: min(1100px, 96vw);
  max-height: 92vh;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  padding: 14px;
  backdrop-filter: blur(10px);
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(0,0,0,0.35);
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(0,0,0,0.5);
  }
`

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 14px;
  display: block;
`

const ModalCaption = styled.div`
  margin-top: 10px;
  color: rgba(255,255,255,0.92);
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.35);
`

// Data constructed from folder structure
const MENU_ITEMS = [
  // Meat Items
  { id: "meat-1", title: "סנדוויץ' חלה עם שניצל", category: "meat", image: "/images/meat/20210930_194746.jpg" },
  { id: "meat-2", title: "קדירות בשר", category: "meat", image: "/images/meat/20230316_145304.jpg" },
  { id: "meat-3", title: "רוסטביף מגולגל עם צ'ימיצ'ורי", category: "meat", image: "/images/meat/20240202_150255.jpg" },
  { id: "meat-4", title: "פילה/סינטה", category: "meat", image: "/images/meat/20240913_091520.jpg" },
  { id: "meat-5", title: "סוכריות עראייס", category: "meat", image: "/images/meat/20250909_192415.jpg" },
  { id: "meat-6", title: "רצועות רוסטביף", category: "meat", image: "/images/meat/IMG_20220412_080711_513.jpg" },
  { id: "meat-7", title: "רוסטביף על הרשת", category: "meat", image: "/images/meat/IMG_20220818_121210_558.jpg" },
  { id: "meat-8", title: "פוקצ'ה עראייס", category: "meat", image: "/images/meat/IMG_20230531_162853.jpg" },
  { id: "meat-9", title: "מבחר בשרים על האש", category: "meat", image: "/images/meat/IMG-20220806-WA0024.jpg" },
  { id: "meat-10", title: "ה-המבורגר", category: "meat", image: "/images/meat/IMG-20230305-WA0040.jpg" },
  { id: "meat-11", title: "מיני המבורגר - קומפלט", category: "meat", image: "/images/meat/IMG-20230630-WA0040.jpg" },

  // Vegetarian Items
  { id: "veg-1", title: "סלט אנטיפסטי", category: "vegetarian", image: "/images/vegeterian/20211108_141744.jpg" },
  { id: "veg-2", title: "פלטת ירקות", category: "vegetarian", image: "/images/vegeterian/20240628_131037.jpg" },
  { id: "veg-3", title: "סלט בוראטה", category: "vegetarian", image: "/images/vegeterian/20240727_180616.jpg" },
  { id: "veg-4", title: "פיצות", category: "vegetarian", image: "/images/vegeterian/20250210_125914.jpg" },
  { id: "veg-5", title: "סלט קפרזה", category: "vegetarian", image: "/images/vegeterian/20251024_135528.jpg" },
  { id: "veg-6", title: "פוקצ'ה אנטיפסטי", category: "vegetarian", image: "/images/vegeterian/20251114_125453.jpg" },
  { id: "veg-7", title: "פיצות נפוליטאנה", category: "vegetarian", image: "/images/vegeterian/20251212_154419.jpg" },
  { id: "veg-8", title: "כדורי פלאפל", category: "vegetarian", image: "/images/vegeterian/IMG_20220401_092927_406.jpg" },
  { id: "veg-9", title: "חמשוקה", category: "vegetarian", image: "/images/vegeterian/IMG_20220704_095651_208.jpg" },
  { id: "veg-10", title: "לזניה", category: "vegetarian", image: "/images/vegeterian/IMG_20230119_152618_759.jpg" },
  { id: "veg-11", title: "לביבות בטטה", category: "vegetarian", image: "/images/vegeterian/IMG-20230602-WA0045.jpg" },
  { id: "veg-12", title: "מבחר טאפאסים", category: "vegetarian", image: "/images/vegeterian/IMG-20231109-WA0042.jpg" },
  { id: "veg-13", title: "פלאפל חצילים", category: "vegetarian", image: "/images/vegeterian/IMG-20240611-WA0039.jpg" },
  { id: "veg-14", title: "אנטיפסטי", category: "vegetarian", image: "/images/vegeterian/IMG-20240624-WA0048.jpg" },
  { id: "veg-15", title: "פלאפל מהסרטים", category: "vegetarian", image: "/images/vegeterian/IMG_20240104_150452_602.jpg" },
  { id: "veg-16", title: "ענני ניוקי עבודת יד", category: "vegetarian", image: "/images/vegeterian/IMG_20230817_122457_925.jpg" },

  // Salads
  { id: "salad-1", title: "סלט קינואה", category: "salads", image: "/images/salads/20231002_105253.jpg" },
  { id: "salad-2", title: "פרחי ירקות", category: "salads", image: "/images/salads/20240628_130947.jpg" },
  { id: "salad-3", title: "סלט עגבניות שרי", category: "salads", image: "/images/salads/IMG-20240624-WA0045.jpg" },
  { id: "salad-4", title: "קרפצ'יו סלק", category: "salads", image: "/images/salads/IMG-20240624-WA0050.jpg" },
  { id: "salad-5", title: "כרובית בטאבון", category: "salads", image: "/images/vibe/20240131_110342.jpg" },

  // Vibe
  { id: "vibe-2", title: "החצר", category: "vibe", image: "/images/vibe/facebook_1768560568111_7417880665071946351.jpg" },
  { id: "vibe-3", title: "תמיד עם חיוך", category: "vibe", image: "/images/vibe/facebook_1768560622344_7417880892543167053.jpg" },
  { id: "vibe-4", title: "בת מצווש", category: "vibe", image: "/images/vibe/facebook_1768560723205_7417881315584536608.jpg" },
  { id: "vibe-5", title: "בחצר", category: "vibe", image: "/images/vibe/facebook_1768560797926_7417881628985552747.jpg" },
  { id: "vibe-6", title: "הסיירת", category: "vibe", image: "/images/vibe/facebook_1768560934105_7417882200163046030.jpg" },
  { id: "vibe-7", title: "חצילים רוקדים סלסה ", category: "vibe", image: "/images/vibe/IMG-20211106-WA0008.jpg" },
  { id: "vibe-8", title: "מבחר סלטים", category: "vibe", image: "/images/vibe/IMG-20220701-WA0042.jpg" },
  { id: "vibe-9", title: "מהמטבח באהבה", category: "vibe", image: "/images/vibe/IMG-20260103-WA0027.jpg" },
];

const CATEGORIES = {
  meat: "בשרי",
  vegetarian: "צמחוני",
  salads: "סלטים",
  vibe: "אווירה"
};

export default function MainPage() {
  const [filter, setFilter] = useState('all');
  const videoRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  useEffect(() => {
    if (!selectedItem) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <HeroTopBar>
            <BrandColumn>
              <LogoWrap aria-label="Logo">
                <LogoImg src={withPrefix("/images/logo.svg")} alt="Logo" />
              </LogoWrap>
            </BrandColumn>
          </HeroTopBar>

          <VideoBackground 
            autoPlay 
            loop 
            muted 
            playsInline
            ref={videoRef}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.5;
              }
            }}
          >
            <source src="https://pub-ab43bc4b19a740dc9966f664f206b079.r2.dev/VID-20260103-WA0025.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoBackground>
          <HeroOverlay />
          <HeroContent>
            <HeroTitle>מהמטבח של סטיב</HeroTitle>
            <HeroSubtitle>חוויה קולינרית ייחודית</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ContactRow>
          <ContactIconLink
            href="https://wa.me/972528083737"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <ContactIconImg src={withPrefix("/images/whatsapp.svg")} alt="" />
          </ContactIconLink>
          <ContactIconLink
            href="https://www.instagram.com/stevefrenkel.72?igsh=aTZtMG4xOWx0MXk1/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIconDark viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#111"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
              />
            </InstagramIconDark>
          </ContactIconLink>
          <ContactIconLink
            href="https://www.facebook.com/steve.frenkel.1"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <ContactIconImg src={withPrefix("/images/facebook.png")} alt="" />
          </ContactIconLink>
          <ContactPhoneLink href="tel:+972528083737" aria-label="Call 052-8083737">
            <ContactPhoneIcon aria-hidden="true">☎</ContactPhoneIcon>
            052-8083737
          </ContactPhoneLink>
        </ContactRow>

        <FilterContainer>
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            הכל
          </FilterButton>
          <FilterButton active={filter === 'meat'} onClick={() => setFilter('meat')}>
            בשרי
          </FilterButton>
          <FilterButton active={filter === 'vegetarian'} onClick={() => setFilter('vegetarian')}>
            צמחוני
          </FilterButton>
          <FilterButton active={filter === 'salads'} onClick={() => setFilter('salads')}>
            סלטים
          </FilterButton>
          <FilterButton active={filter === 'vibe'} onClick={() => setFilter('vibe')}>
            אווירה
          </FilterButton>
        </FilterContainer>

        <GalleryGrid>
          {filteredItems.map(item => (
            <Card
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
              }}
              aria-label={`Open ${item.id}`}
            >
              <CardImage src={withPrefix(item.image)} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </GalleryGrid>

        {selectedItem && (
          <ModalOverlay
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={() => setSelectedItem(null)}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalCloseButton onClick={() => setSelectedItem(null)} aria-label="Close">
                ×
              </ModalCloseButton>
              <ModalImage
                src={withPrefix(selectedItem.image)}
                alt={selectedItem.title || selectedItem.id}
              />
              <ModalCaption>
                {selectedItem.title}
              </ModalCaption>
            </ModalContent>
          </ModalOverlay>
        )}
        
      </PageContainer>
    </Layout>
  )
}
