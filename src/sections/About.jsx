import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices to ensure readability and scalability.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description:
      "Optimizing applications for speed and efficiency to provide a seamless user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I believe in the power of teamwork and actively contribute to collaborative projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuous learning and staying updated with the latest industry trends to enhance my skills.",
  },
]

const About = () => {
  return (
    <section id="about" className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/*Left Column */}
          <div className='space-y-8 '>
            <div className='animate-fade-in '>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,
              <span className='text-white font-serif italic font-normal '> one component at a time.</span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>I'm a passionate software engineer whose journey began with simple curiosity—experimenting with code and building websites just to see how things worked. That curiosity quickly turned into a deep commitment to creating meaningful digital experiences.</p>

              <p>I specialize in modern frontend technologies, with a strong focus on React, JavaScript, and Next.js. My work blends technical excellence with thoughtful design, ensuring that every product I build is not only performant and scalable, but also intuitive and enjoyable for users.</p>

              <p>I care deeply about clean code, user experience, and continuously improving my craft. Whether I'm optimizing performance, refining UI interactions, or learning the latest tools in the ecosystem, I always aim to deliver high-quality, user-centered solutions.</p>

              <p>When I'm not coding, you'll find me exploring new technologies, playing video games, sharing knowledge with fellow developers, or enjoying sports—both watching and playing.</p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to create digital experiences that not only meet user needs but also inspire and delight. Through innovation, collaboration, and a relentless pursuit of excellence, I strive to build products that make a meaningful impact in the digital world."
              </p>
            </div>
          </div>
          {/*Right Column */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((highlight, index) => (
              <div key={index} className='glass p-6 rounded-2xl animate-fade-in'>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <highlight.icon className='w-6 h-6 text-primary'/>
                </div>
                <h3 className='text-lg font-bold mb-2'>{highlight.title}</h3>
                <p className='text-sm text-muted-foreground'>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
