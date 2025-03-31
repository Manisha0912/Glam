import logo from './gu.jpeg'
import dropdown_icon from './dropdown_icon.svg'
import profile_pic from './upload_area.png'
import arrow_icon from './arrow_icon.svg'
import make from './prof.jpeg'
import makeup from './makeupp.avif'
import contact from './contact.gif'
import about from './about.jpg'
import info_icon from './info_icon.svg'
import verified_icon from './verified_icon.svg'
import menu_icon from './menu.svg'
import cross_icon from './cross.svg'
import BridalMakeup from './Bridal.avif'
import HdMakeup from './HDmakeup.webp'
import HairStyling from './hair.jpg'
import NailArt from './nails2.jpg'
import PartyMakeup from './party.jpeg'
import PermanentMakeup from  './permanent_makeup.jpg'
import Threading from './Threading.jpeg'
import SareeDraping from './SareeDrape.webp'
import TemporaryTatoos from './Tattoo.jpeg'
import Keratin  from './Keratin.jpg'
import Pedicure from './Pedicure.jpg'
import Manicure from './Manicure.jpg'


import Banner from './Ban1.webp'
import artist1 from './BMA.webp'
import artist2 from './HD1.jpg'
import artist3 from './Hair1.jpg'
import artist4 from './Nail1.jpg'
import artist5 from './Pmk1.jpg'
import artist6 from './PMA.jpg'
import artist7 from './BMA2.jpg'
import artist8 from './HD2.jpg'
import artist9 from './Hair2.avif'
import artist10 from './Nail2.jpg'
import artist11 from './BMA3.jpeg'
import artist12 from './Hair3.jpg'
import artist13 from './HD4.jpg'
import artist14 from './PMA1.jpg'
import artist15 from './Pmk2.jpg'
import artist16 from './Bridal4.jpg'
import artist17 from './Hair4.jpg'
import artist18 from './Hair5.jpg'
import artist19 from './keratin1.jpg'
import artist20 from './Thread1.jpg'
import artist21 from './TT.avif'
import artist22 from './Ped1.jpg'
import artist23 from './Man1.jpg'
import artist24 from './Ped2.jpg'
import artist25 from './SD.webp'
import artist26 from './Ped3.jpg'



export const assets={
    logo,
    dropdown_icon,
    profile_pic,
    arrow_icon,
    make,
    makeup,
    contact,
    about,
    info_icon,
    verified_icon,
    menu_icon,
    cross_icon,
    BridalMakeup,
    HdMakeup,
    HairStyling,
    NailArt,
    PartyMakeup,
    PermanentMakeup,
    Banner

}

export const makeupService = [
    {
        service: 'Bridal Makeup',
        image: BridalMakeup// replace with your image path
    },
    {
        service: 'Hd Makeup',
        image: HdMakeup // replace with your image path
    },
    {
        service: 'Hair Styling',
        image: HairStyling // replace with your image path
    },
    {
        service: 'Nail Art',
        image: NailArt // replace with your image path
    },
    {
        service: 'Party Makeup',
        image: PartyMakeup // replace with your image path
    },
    {
        service: 'Permanent Makeup',
        image: PermanentMakeup // replace with your image path
    },
    {
        service:'Threading',
        image: Threading
    },
    {
        service:'Saree Draping',
        image: SareeDraping
    },
    {
        service:'Temporary Tattoos',
        image: TemporaryTatoos
    },
    { service:'Keratin Treatment',
        image:Keratin

    },
    { service:'Pedicure Treatment',
        image:Pedicure

    },
    { service:'Manicure Treatment',
        image:Manicure

    }
   


];




export const beautician = [
    {
        _id: 'artist1',
        name: 'Sonia Kapoor',
        image: artist1,
        service: 'Bridal Makeup',
        qualification:'Cosmetologist',
        experience: '5 Years',
        about: "Sonia is a skilled bridal makeup artist known for enhancing natural beauty with a flawless finish. She expertly blends traditional and modern styles to create customized looks that complement each bride’s features and skin tone. Using high-quality products and precise techniques, she ensures a radiant and confident look for the special day.",
        fees: 15000,
        address: {
            line1: 'Kukatpally',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist2',
        name: 'Megha Sharma',
        image: artist2,
        service: 'HD Makeup',
        qualification:'Beauty Specialist',
        experience: '4 Years',
        about: "Megha is a skilled HD makeup artist, specializing in techniques that create a flawless, long-lasting, and camera-ready finish. She expertly enhances facial features with precision, ensuring smooth coverage that looks perfect under both natural and studio lighting. Her expertise makes her a top choice for weddings, photoshoots, and special occasions.",
        fees: 12000,
        address: {
            line1: 'Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist3',
        name: 'Riya Verma',
        image: artist3,
        service: 'Hair Styling',
        qualification:'Hairstylist',
        experience: '6 Years',
        about: "Riya is a talented hairstylist known for her creative and versatile styling techniques. She tailors each look to suit the client’s personality, face shape, and event type—whether it's an elegant updo for a wedding, voluminous curls for a party, or a sleek professional style. Her expertise ensures a flawless and long-lasting finish for any occasion.",
        fees: 8000,
        address: {
            line1: 'Ameerpet',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist4',
        name: 'Neha Chawla',
        image: artist4,
        service: 'Nail Art',
        qualification:'Nail Technician',
        experience: '3 Years',
        about:'Neha is a skilled nail artist known for creating trendy and elegant designs. She tailors each look to match her clients’ preferences, from minimalistic patterns to bold, glamorous styles. Her expertise in nail care and attention to detail ensure stunning and long-lasting results.' ,
        fees: 5000,
        address: {
            line1: 'Begumpet',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist5',
        name: 'Ananya Rao',
        image: artist5,
        service: 'Party Makeup',
        qualification:'Beauty Specialist',
        experience: '5 Years',
        about: 'Ananya is a talented makeup artist specializing in party makeup, creating stunning and sophisticated looks for any celebration. She expertly enhances facial features with flawless blending, vibrant colors, and the perfect balance of glam and elegance. Her attention to detail ensures that every client shines with confidence at weddings, parties, and special events.',
        fees: 10000,
        address: {
            line1: 'Madhapur',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist6',
        name: 'Simran Kaur',
        image: artist6,
        service: 'Permanent Makeup',
        qualification:'Microblading Specialist',
        experience: '7 Years',
        about:' Simran is a certified permanent makeup artist with expertise in enhancing facial features through advanced techniques. She specializes in microblading for natural-looking brows, lip tinting for a soft, defined pout, and cosmetic tattooing to create long-lasting beauty solutions. Her precision and artistry help clients achieve a polished and effortless look that lasts for years.',
        fees: 20000,
        address: {
            line1: 'Jubilee Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist7',
        name: 'Pooja Nair',
        image: artist7,
        service: 'Bridal Makeup',
        qualification:'Cosmetologist ',
        experience: '6 Years',
        about: 'Pooja is an expert in both traditional and contemporary bridal makeup, tailoring each look to complement the bride’s features and wedding attire. With an eye for detail and a deep understanding of makeup techniques, she creates flawless, long-lasting finishes that enhance natural beauty. Her precision and elegant touch have earned her the trust of numerous brides, making her a top choice for wedding makeup in Telangana.',
        fees: 16000,
        address: {
            line1: 'Secunderabad',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist8',
        name: 'Kavya Menon',
        image: artist8,
        service: 'HD Makeup',
        qualification:'Makeup Artist',
        experience: '5 Years',
        about: 'Kavya is an expert in HD makeup, creating flawless, camera-ready looks for her clients. Known for her work in the fashion and media industries, she ensures a smooth, glowing finish that stands out in high-definition visuals. Her attention to detail and ability to enhance natural beauty make her a top makeup artist to book in Telangana.',
        fees: 13000,
        address: {
            line1: 'Gachibowli',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist9',
        name: 'Tanya Arora',
        image: artist9,
        service: 'Hair Styling',
        qualification:'Trichologist',
        experience: '4 Years',
        about: 'Tanya is a skilled hairstylist known for creating unique styles for every occasion, from elegant wedding looks to modern trends. Her expertise and creativity make her a highly sought-after professional in Telangana. Tanya’s exceptional work ensures clients always leave with a stunning, personalized hairstyle.',
        fees: 9000,
        address: {
            line1: 'Hitech City',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'artist10',
        name: 'Swati Agarwal',
        image: artist10,
        service: 'Nail Art',
        qualification:'Manicurist',
        experience: '4 Years',
        about: 'Swati is a skilled nail artist specializing in custom designs, from minimalistic to extravagant styles. Her perfectionism and attention to detail make every design flawless. Known for her creativity and precision, Swati is a top nail artist to book in Telangana for stunning, personalized nail art.',
        fees: 6000,
        address: {
            line1: 'Punjagutta',
            line2: 'Hyderabad, Telangana'
        }
    },
        {
            _id: 'artist11',
            name: 'Roshni Patel',
            image: artist11,
            service: 'Bridal Makeup',
            qualification:'Cosmetologist',
            experience: '7 Years',
            about: 'Roshni is a highly regarded bridal makeup artist, celebrated for her meticulous attention to detail in creating flawless, stunning looks for brides on their special day. She understands the importance of each moment, ensuring that every bride feels confident and radiant. With a strong reputation for excellence and a personalized approach, Roshni is the go-to professional in Telangana for brides seeking a perfect and memorable makeover.',
            fees: 17000,
            address: {
                line1: 'Somajiguda',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist12',
            name: 'Sneha Gupta',
            image: artist12,
            service: 'Hair Styling',
            qualification:'Hairdressing Diploma',
            experience: '5 Years',
            about: 'Sneha is a talented hairstylist known for crafting gorgeous, customized hairstyles for any event, whether its a classic look or a modern, trendy style. Her ability to tailor each hairstyle to suit the occasion and her clients personality has earned her widespread recognition. With an eye for detail and a passion for her craft, Sneha is a top hairstylist to book in Telangana for a perfect, personalized look!',
            fees: 9500,
            address: {
                line1: 'Kondapur',
                line2: 'Hyderabad, Telangana'
            }
        },
    
        {
            _id: 'artist13',
            name: 'Nithya Menon',
            image: artist13,
            service: 'HD Makeup',
            qualification:'Beauty Specialist',
            experience: '5 Years',
            about: 'Nithya is a skilled expert in HD makeup, delivering flawless, camera-ready looks that enhance her clients natural beauty. Known for her work in the fashion and media industries, her makeup techniques are praised for creating a seamless glow that shines in high-definition visuals. ',
            fees: 13000,
            address: {
                line1: 'Gachibowli',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist14',
            name: 'Aisha Khan',
            image: artist14,
            service: 'Permanent Makeup',
            qualification:'Microblading Specialist',
            experience: '6 Years',
            about: 'Aisha is a skilled permanent makeup artist specializing in microblading, ombre brows, and semi-permanent lip tinting. She ensures precision and long-lasting results. Top makeup artist to book in Telangana!',
            fees: 19000,
            address: {
                line1: 'Kompally',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist15',
            name: 'Priyanka Deshmukh',
            image: artist15,
            service: 'Party Makeup',
            qualification:'Cosmetologist',
            experience: '6 Years',
            about: 'Priyanka is a highly skilled expert in glamorous party makeup, specializing in creating stunning, flawless looks for any special event. Known for her creativity and meticulous attention to detail, she ensures that every client leaves looking their best. With her expertise in enhancing natural beauty, Priyanka has earned a reputation as one of the top makeup artists to book in Telangana.',
            fees: 11000,
            address: {
                line1: 'Miyapur',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist16',
            name: 'Ritika Sharma',
            image: artist16,
            service: 'Bridal Makeup',
            qualification:'Cosmetologist',
            experience: '8 Years',
            about: 'Ritika specializes in traditional and contemporary bridal looks. With years of experience, she ensures that every bride shines on her special day. A highly sought-after bridal artist in Telangana!',
            fees: 18000,
            address: {
                line1: 'Banjara Hills',
                line2: 'Hyderabad, Telangana'
            }
        },
      
       
        
        {
            _id: 'artist17',
            name: 'Kavya Reddy',
            image: artist17,
            service: 'Hair Styling',
            qualification:'Hairstylist',
            experience: '10 Years',
            about: 'Kavya is a professional hairstylist specializing in elegant updos, curls, and bridal hairstyles. Her styling techniques ensure long-lasting and voluminous hair for every occasion.',
            fees: 8000,
            address: {
                line1: 'Banjara Hills',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist18',
            name: 'Aishwarya Das',
            image: artist18,
            service: 'Keratin Treatment',
            qualification:'Trichologist',
            experience: '8 Years',
            about: 'Aishwarya is a skilled Trichologist and hairstylist, specializing in keratin treatments and hair health. With her expertise in both styling and scalp care, she ensures smooth, healthy, and shiny hair. Her treatments are designed to improve hair texture, reduce frizz, and enhance overall hair quality.',
            fees: 7500,
            address: {
                line1: 'Gachibowli',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist19',
            name: 'Neha Patel',
            image: artist19,
            service: 'Keratin Treatment',
            qualification:'Trichologist',
            experience: '9 Years',
            about: 'Neha is a hair expert specializing in keratin treatments, helping clients achieve smooth, frizz-free, and healthy hair. Her expertise ensures long-lasting shine and nourishment for all hair types.',
            fees: 25000,
            address: {
                line1: 'Hitech City',
                line2: 'Hyderabad, Telangana'
            }
        },
        
        {
            _id: 'artist20',
            name: 'Esha Khan',
            image: artist20,
            service: 'Threading',
            qualification:'Esthetician ',
            experience: '6 Years',
            about: 'Esha is an expert in precise eyebrow shaping and facial threading, ensuring a clean and polished look. Her technique is gentle yet effective, providing perfectly defined brows and smooth skin.',
            fees: 1500,
            address: {
                line1: 'Banjara Hills',
                line2: 'Hyderabad, Telangana'
            }
        },
        
        
        {
            _id: 'artist21',
            name: 'Meenal Saxena',
            image: artist21,
            service: 'Temporary Tattoos',
            qualification:'Tattoo Artist',
            experience: '9 Years',
            about: 'Meenal is an expert in intricate and stylish temporary tattoos, offering customized designs for events, festivals, and special occasions. Her artistic skills bring creativity and elegance to body art.',
            fees: 8500,
            address: {
                line1: 'Madhapur',
                line2: 'Hyderabad, Telangana'
            }
        },
        
        
        {
            _id: 'artist22',
            name: 'Roshni Agarwal',
            image: artist22,
            service: 'Pedicure Treatment',
            Qualification:'Aesthetician',
            experience: '8 Years',
            about: 'Roshni is a skilled pedicure specialist, offering luxurious foot care treatments that leave clients feeling refreshed and pampered. She focuses on nail care, skin exfoliation, and relaxation techniques for the ultimate spa experience.',
            fees: 23000,
            address: {
                line1: 'Kukatpally',
                line2: 'Hyderabad, Telangana'
            }
        },
    
        
        {
            _id: 'artist23',
            name: 'Shweta Kapoor',
            image: artist23,
            service: 'Manicure Treatment',
            qualification:'Nail Technician',
            experience: '7 Years',
            about: 'Shweta specializes in luxurious manicure treatments, offering nail shaping, cuticle care, hand massage, and premium nail finishes. Her services ensure healthy, beautiful nails with a touch of elegance.',
            fees: 7800,
            address: {
                line1: 'Jubilee Hills',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist24',
            name: 'Sanya Verma',
            image: artist24,
            service: 'Pedicure Treatment',
            experience: '5 Years',
            qualification:'Aesthetician',
            about: 'Sanya specializes in luxurious pedicure treatments for soft, refreshed feet. She offers a range of services, from classic to spa pedicures. With expert care, she ensures relaxation and flawless results. Her attention to detail makes every session a treat. Book Sanya in Telangana for the perfect pedicure experience!',
            fees: 2000,
            address: {
                line1: 'Gachibowli',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist25',
            name: 'Sriya Sharma',
            image: artist25,
            service: 'Saree Draping',
            experience: '4 Years',
            qualification: 'Stylist',
            about: 'Sriya is a professional saree draping artist known for her precision and creativity. Whether it’s a bridal drape or a party look, she ensures a flawless and comfortable fit. Book Riya in Telangana for a stunning saree draping experience!',
            fees: 2500,
            address: {
                line1: 'Banjara Hills',
                line2: 'Hyderabad, Telangana'
            }
        },
        {
            _id: 'artist26',
            name: 'Taksha Kapoor',
            image: artist26,
            service: 'Pedicure Treatment',
            experience: '6 Years',
            qualification: 'Aesthetician',
            about: 'Taksha specializes in professional pedicure treatments that leave your feet soft, rejuvenated, and beautiful. From classic to luxury spa pedicures, she ensures a relaxing and refreshing experience. Book Neha in Telangana for expert foot care!',
            fees: 2200,
            address: {
                line1: 'Jubilee Hills',
                line2: 'Hyderabad, Telangana'
            }
        }
        
        
        
        

];
