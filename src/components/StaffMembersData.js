// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const staffMembers = {
  executive: [
    {
      name: { first: 'Nathan', last: 'Long' },
      position: 'President',
      major: 'Mechanical Engineering',
      involvement: 'Biomechatronics Lab, UCLA RecTech',
      restaurant: 'Ralph\'s Bar',
      description: 'Hi! My name is Nathan and I am a 3rd year Mechanical Engineering major. I am also the President of MentorSEAS for the 17/18 academic year! Whether you are a mentee or mentor, feel free to contact me anytime!',
      links: {
        linkedin: 'https://www.linkedin.com/in/nathan-long-2997a6103/',
        facebook: 'https://www.facebook.com/nathanlong832',
        email: 'nathanlong832@gmail.com'
      }
    },
    {
      name: { first: 'Cynthia', last: 'Vo' },
      position: 'Vice President',
      major: 'Mechanical Engineering',
      involvement: 'Society of Women Engineers, American Society of Mechanical Engineers',
      restaurant: 'Gushi',
      description: 'Hey there! I\'m a 3rd year Mechanical Engineering major. I like to do yoga, try new foods, and watch lots of YouTube. I was also a New Student Advisor in the summer, and I\'m stoked to be meet you fellow Bruins!',
      links: {
        email: 'pcynthiavo@gmail.com'
      }
    }
  ],
  staffMember: [
    {
      name: { first: 'Shawn', last: 'Lo' },
      position: 'Mentorship Director',
      major: 'Electrical Engineering',
      involvement: 'VSU Modern, UCLA IEEE',
      restaurant: 'CAVA',
      description: 'Hi! My name is Shawn and I\'m a fourth year Electrical Engineer from the Bay Area. In my free time, I like to listen to music, play video games, and play music-themed video games. I also enjoy dancing; I\'m currently leadership on VSU Modern, one of the competitive dance teams on campus, and I\'m an alumni director of Foundations Choreography, a beginner dance organization. I\'ve also been involved with IEEE\'s projects, feel free to ask me about anything!',
      links: {
        facebook: 'https://www.facebook.com/shawnnanigans',
        email: 'shawnlo.me@gmail.com'
      }
    },
    {
      name: { first: 'Francis', last: 'Paras' },
      position: 'Outreach',
      major: 'C & EE',
      involvement: 'ASCE',
      restaurant: 'Chick-fil-a',
      description: 'I am a C&EE Senior. I also am the Mentorship Chair for the ASCE at UCLA Student Chapter. I love ALL sports, skateboarding, sneakers, Smash Bros, Supreme, Pokemon, anything else Nintendo, and, of course, anything UCLA.',
      links: {
        email: 'fparas96@gmail.com',
        linkedin: 'https://www.linkedin.com/in/francis-paras-b99812104'
      }
    },
    {
      name: { first: 'Bibek', last: 'Ghimire' },
      position: 'Co-Web Director',
      major: 'Computer Science',
      involvement: 'The Coding School, Creative Labs, Thought Lounge',
      restaurant: 'Ike\'s Sandwiches',
      description: 'A nomadic 3rd year Computer Science major indigenous to Northern California whose current obsessions include web development, playing guitar, and pondering his life\'s purpose. A fickle creature, he is subject to change this bio by the next time you see it.',
      links: {
        personal: 'http://www.bibekg.com',
        linkedin: 'http://www.linkedin.com/in/bibekgg',
        facebook: 'http://www.facebook.com/bibekgg',
        email: 'bibekg@ucla.edu'
      }
    },
    {
      name: { first: 'Simon', last: 'Zhou' },
      position: 'Co-Web Director',
      major: 'Computer Science',
      involvement: 'Community Service Commission, Creative Labs, Phi Kappa Psi',
      restaurant: 'Gushi',
      description: 'Welcome to mentorSEAS!',
      links: {
        personal: 'http://www.simonzh.com',
        linkedin: 'http://www.linkedin.com/in/zhousimon',
        facebook: 'https://www.facebook.com/siimon.zhou',
        email: 'simon.zhou@ucla.edu'
      }
    },
    {
      name: { first: 'Akhil', last: 'Harapanahalli' },
      position: 'Mentorship Director',
      major: 'Bioengineering',
      involvement: 'Special Olympics',
      restaurant: 'Ike\'s',
      description: 'Hey all! My name is Akhil Harapanahalli, and I\'m a junior Bioengineering major. My academic and career interests are in research, where I love to study biomarker discovery. Some of my other passions are playing basketball and volunteering for Special Olympics. Looking forward to working with you!',
      links: {
        linkedin: 'https://www.linkedin.com/in/akhil-harapanahalli-a1b920115/',
        facebook: 'https://www.facebook.com/akhil.harapanahalli',
        email: 'akhilhara@gmail.com'
      }
    },
    {
      name: { first: 'Anshul', last: 'Aggarwal' },
      position: 'Events',
      major: 'CS & E',
      involvement: 'LA Hacks, Creative Labs, FPS',
      restaurant: 'Chipotle',
      description: 'I love to get involved, feel free to reach out whenever!',
      links: {
        linkedin: 'https://www.linkedin.com/in/anshul-agg/',
        facebook: 'https://www.facebook.com/anshul.aggarwal.14',
        github: 'https://github.com/OmegaNalphA',
        personal: 'https://omeganalpha.github.io/'
      }
    },
    {
      name: { first: 'Monil', last: 'Patel' },
      position: 'Mentorship',
      major: 'Computer Science',
      involvement: 'Community Service Commission, Mentorship, Thought Lounge',
      restaurant: 'Gushi',
      description: 'I am a CS student from the Bay Area (Los Altos), who is trying to figure it out. Constantly thinking about the intersection of things and existential questions. Please feel free to reach out!',
      links: {
        linkedin: 'http://www.linkedin.com/in/monilpatel21',
        email: 'monilpat@gmail.com'
      }
    },
    {
      name: { first: 'Juan-Pablo', last: 'Almanza-Soto' },
      position: 'Mentorship',
      major: 'Aerospace Engineering',
      involvement: 'Plasma & Space Propulsion Lab, AISES Rocket Project',
      restaurant: 'Fat Sal\'s',
      description: 'I\'m a second year majoring in aerospace engineering and it\'s my first time on the MentorSEAS board. I\'ve participated in other organizations on campus and I\'m excited to apply my leadership skills. In my free time, I like to play soccer and guitar, listen to music, read and workout.',
      links: {
        linkedin: 'http://www.linkedin.com/in/juan-pablo-almanza-soto-0a21a1146',
        email: 'jpalmanzasoto@ucla.edu'
      }
    },
    {
      name: { first: 'Sumana', last: 'Kaluvai' },
      position: 'Outreach Director',
      major: 'Bioengineering',
      involvement: 'ESUC, SEP, Phoenix and Powell',
      restaurant: 'CAVA',
      description: 'Hi! I am a Junior at UCLA studying BioEngineering. I am currently the Internal Vice President of the Engineering society at UCLA and the Recruitment Director of Sigma Eta Pi. I am super excited to work with all the Mentors and Mentees at MentorSEAS.',
      links: {
        linkedin: 'https://www.linkedin.com/in/sumanakaluvai/',
        email: 'sumanakaluvai@gmail.com'
      }
    },
    {
      name: { first: 'Michael', last: 'Jang' },
      position: 'Events',
      major: 'Mechanical Engineering',
      involvement: 'DBF',
      restaurant: 'Gushi',
      description: 'I am a third-year Mechanical Engineer. I aim to be versatile and adaptable in order to do my best and provide an impact wherever I go. I am always curious and try to dedicate at least one hour everyday to learn variety of subjects.',
      links: {
        linkedin: 'https://www.linkedlin.com/in/hyunsjang614/',
        email: 'hyunsjang614@gmail.com'
      }
    },
    {
      name: { first: 'Stephan', last: 'Ahn' },
      position: 'Outreach',
      major: 'C & EE',
      involvement: 'ASCE',
      restaurant: 'Kazunori',
      description: 'I\'m a 4th year Civil and Environmental Engineering major who loves music, food, and people.',
      links: {
        facebook: 'https://www.facebook.com/stephan.ahn',
        email: 'sahn1995@gmail.com'
      }
    }
  ]
}

Object.keys(staffMembers).forEach((memberType: string) => {
  staffMembers[memberType].forEach((user: MemberDataType) => {
    const { first, last } = user.name
    const imageId = `${first.toLowerCase()}-${last.toLowerCase()}`

    user.images = {}

    // Load regular image
    // flow-disable-next-line
    user.images.regular = require(`pages/StaffPage/images/${imageId}.jpg`)
  })
})

export default staffMembers
