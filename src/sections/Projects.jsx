import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const projects = [
  {
    title: "NBAGo",
    description: "A comprehensive platform for NBA enthusiasts to track live scores, player statistics, and game highlights in real-time.",
    image: "/projects/project1.png",
    tags: ["React", "NodeJS", "Javascript", "Tailwind CSS"],
    link: "https://nba-go.vercel.app/",
    github: "https://github.com/Jaydoh19",
  },
]


const Projects = () => {
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      {/* Projects Section */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Projects that
            <span className='text-white font-serif font-normal italic'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of projects showcasing my skills and experience through real-world applications. Each project is briefly described with links to code repositories and live demos.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'>
              {/* Image*/}
              <div className='relative overflow-hidden aspect-video'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'></div>
                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link} target="_blank" className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a href={project.github} target="_blank" className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <Github className='w-5 h-5' />
                  </a>
                </div>
              </div>
              {/* Project Details */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transitions-colors'>{project.title}</h3>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all' />
                </div>
                <p className='text-muted-foreground text-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>{project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}
                    className='glass px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
        {/* View ALL CTA */}
        <div className="mt-12 text-center animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Jaydoh19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects