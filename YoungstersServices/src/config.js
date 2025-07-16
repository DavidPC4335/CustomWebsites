export   const servicesDetails = [
    {
      id: 'deliveries',
      title: 'Delivery Services',
      icon: 'fas fa-truck',
      description: 'Fast, reliable delivery solutions for all your needs',
      features: [
        {
          title: 'Same-day delivery available',
          description: 'Urgent deliveries completed within hours'
        },
        {
          title: 'Real-time tracking',
          description: 'Track your delivery from pickup to destination'
        },
        {
          title: 'Flexible scheduling',
          description: 'Choose delivery times that work for you'
        },
        {
          title: 'Local & Regional',
          description: 'Coverage throughout the metro area and beyond'
        }
      ]
    },
    {
      id: 'moving',
      title: 'Moving Services',
      icon: 'fas fa-box',
      description: 'Professional moving solutions for residential and commercial needs',
      features: [
        {
          title: 'Residential Moving',
          description: 'Complete home moving with care and precision'
        },
        {
          title: 'Commercial Moving',
          description: 'Office and business relocation services'
        },
        {
          title: 'Packing Services',
          description: 'Professional packing and unpacking assistance'
        },
        {
          title: 'Furniture Assembly',
          description: 'Disassembly and reassembly of furniture'
        },
        {
          title: 'Storage Solutions',
          description: 'Short and long-term storage options'
        },
        {
          title: 'Long-Distance',
          description: 'Cross-country and interstate moving'
        }
      ]
    },
    {
      id: 'junk-removal',
      title: 'Junk Removal',
      icon: 'fas fa-trash',
      description: 'Efficient and eco-friendly disposal services',
      features: [
        {
          title: 'Household Cleanouts',
          description: 'Complete home decluttering and cleanup'
        },
        {
          title: 'Office Cleanouts',
          description: 'Commercial space clearing and organization'
        },
        {
          title: 'Construction Debris',
          description: 'Removal of renovation and construction waste'
        },
        {
          title: 'Eco-Friendly Disposal',
          description: 'Responsible waste management and recycling'
        },
        {
          title: 'Donation Services',
          description: 'Donate usable items to local charities'
        },
        {
          title: 'Recycling',
          description: 'Proper recycling of eligible materials'
        }
      ]
    }
  ]
export const links = {
    google:"https://maps.app.goo.gl/ry3aF6eTPaWDVCjs6",
    facebook:"https://www.facebook.com/profile.php?id=61564420419526"
}

export const pricingPlans = [

    {
      id: 'moving',
      title: 'Moving Services',
      icon: 'fas fa-box',
      startingPrice: '$120',
      description: 'Complete moving solutions for homes and offices',
      features: [
        'Professional moving team',
        'Packing materials included',
        'Furniture protection',
        'Loading & unloading',
        'Insurance coverage',
        'Storage solutions'
      ],
      popular: false
    },
    {
      id: 'delivery',
      title: 'Delivery Services',
      icon: 'fas fa-truck',
      startingPrice: '$70',
      description: 'Fast, reliable delivery for all your needs',
      features: [
        'Same-day delivery available',
        'Real-time tracking',
        'Fragile item handling',
        'Flexible scheduling',
        'Professional drivers',
        'Insurance coverage'
      ],
      popular: true
    },
    {
      id: 'junk',
      title: 'Junk Removal',
      icon: 'fas fa-trash',
      startingPrice: '$85',
      description: 'Eco-friendly junk removal and disposal',
      features: [
        'Eco-friendly disposal',
        'Same-day service',
        'No hidden fees',
        'Donation & recycling',
        'Heavy lifting included',
        'Clean-up service'
      ],
      popular: false
    }
  ];

  export const faqs = [
    {
      question: 'How do you calculate pricing?',
      answer: 'Our pricing is based on factors like distance, service type, time requirements, and any special handling needs. We provide transparent quotes with no hidden fees.'
    },
    {
      question: 'Are there any additional fees?',
      answer: 'No hidden fees! Our quotes include all standard services. Additional charges may apply for special requests or services outside normal business hours.'
    },
    {
      question: 'Do you offer discounts?',
      answer: 'Yes! We offer discounts for recurring customers, bulk services, and seasonal promotions. Check our current offers when requesting a quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and digital payment methods. Payment is typically due upon completion of service.'
    },
    {
      question: 'How quickly can you provide service?',
      answer: 'Most services can be scheduled within 24-48 hours. Same-day service is available for urgent requests with an additional fee.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! We provide free, no-obligation estimates for all our services. Use our quote calculator or contact us directly.'
    }
  ];