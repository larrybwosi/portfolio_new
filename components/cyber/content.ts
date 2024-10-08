import { courses, design, tripguide } from "@/assets";

export const landingData = [
  {id:1, title:"Experience the Future of Digital Connectivity"},
  {id:2, title:"Unlock the Power of Technology"},
  {id:2, title:"At [Company Name] Cyber Cafe, we offer:"}

]
export const landingDataItems = [
  "High-speed internet access for seamless browsing",
  "State-of-the-art computer systems with latest software",
  "Comfortable workspaces designed for productivity",
  "Printing, scanning, and other business services",
  "Expert tech support to assist with any issues"
]
export const servicesData = [
  {
    sectionName: "About Us",
    title: "We Are Offering The Best Photography Services For You",
    description: "Our passion for capturing life's moments drives us to deliver exceptional photography services. From breathtaking landscapes to intimate portraits, we blend technical expertise with artistic vision. Our team of skilled photographers is dedicated to preserving your memories with creativity and precision, ensuring each image tells a unique story. Whether it's a wedding, corporate event, or personal project, we're committed to exceeding your expectations with stunning visuals that last a lifetime.",
    imageSrc: tripguide,
    imageAlt: "Person overlooking misty mountains",
    buttonText: "Contact Us",
    imagePosition: "left",
    reverse: false,
  },
  {
    sectionName: "Designs",
    title: "Crafting impactful designs that resonate with your brand. ",
    description: "Our team of design experts combines technical mastery with unwavering artistic vision to translate your ideas into captivating visuals. We have a keen eye for detail and a deep understanding of user experience. This ensures your design not only looks amazing but also effectively communicates your message and engages your audience. We work closely with you throughout the process, ensuring each design is tailored to your specific goals and brand identity. We don't just capture moments, we craft experiences that leave a lasting impression",
    imageSrc: design,
    imageAlt: "Person overlooking misty mountains",
    buttonText: "Contact Us",
    reverse: false,
    imagePosition: "right",
  },
  {
    sectionName: "Courses",
    title: "Empowering you with digital skills ",
    description: "Beyond crafting impactful designs, we also equip you with the tools to navigate the digital world. Our experienced instructors offer comprehensive training in essential computer packages. Whether you're a beginner seeking a solid foundation or a seasoned professional wanting to refine your skills, we tailor our courses to your specific needs. We believe in a patient and engaging learning environment that fosters confidence and mastery in using these valuable tools",
    imageSrc: courses,
    imageAlt: "Person overlooking misty mountains",
    buttonText: "Contact Us",
    reverse: false,
    imagePosition: "left",
  },
];

export const constactInfo = [
  {title:"We'd love to help", p:`We're a full service agency with experts ready to help. We'll get in touch within 24 hours.`},
  {
    label:"Head of Design, Sisyphus Labs", description:`Untitled UI is the real deal. We've worked with a dozen agencies that simply don't deliver. Working with experienced and knowledgeable professionals at the helm is a breath of fresh air.`},
  {labels:[
    "First name", 
    "Last name", 
    "Email",
    "Phone number",
    "Message",
    "Agree to policy",
    "Submit"
  ]
  }

]