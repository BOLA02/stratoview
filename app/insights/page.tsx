import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Insights & Blog | Stratoview Nigeria',
  description: 'Latest articles and insights on geoscience, environmental consulting, and sustainability',
}

export default function Insights() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
        <ScrollAnimation animation="fade-in-up" className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Insights & Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Thought leadership and industry insights from our team of experts
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          {articles.length > 0 && (
            <ScrollAnimation animation="fade-in-up" delay={0} className="mb-16">
              <Link href="#" className="group block">
                <div className="bg-card border-2 border-accent/30 rounded-xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300">
                  <div 
                    className="relative h-80 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${articles[0].image}")`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                      Featured Article
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                      {articles[0].category}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 group-hover:text-accent transition leading-tight text-balance">
                      {articles[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{articles[0].excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {articles[0].date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {articles[0].author}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, idx) => (
              <ScrollAnimation key={idx} animation="scale-in" delay={idx * 100}>
                <Link href="#" className="group block h-full">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                    <div 
                      className="relative h-48 bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage: `url("${article.image}")`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="inline-flex items-center gap-2 text-white font-medium text-sm">
                          Read More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-3 w-fit">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <ScrollAnimation animation="fade-in-up" className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Stay Updated</h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter for the latest insights, industry trends, and expert perspectives delivered to your inbox monthly.
          </p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            />
            <button type="submit" className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  )
}

const articles = [
  {
    title: 'The Future of Environmental Consulting in Africa',
    category: 'Environmental Sustainability',
    excerpt: 'Exploring emerging trends and opportunities in environmental consulting across the African continent.',
    date: 'July 1, 2024',
    author: 'Dr. Adekunle Okafor',
    slug: 'future-environmental-consulting',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop'
  },
  {
    title: 'Sustainable Mineral Exploration Practices',
    category: 'Mining Industry',
    excerpt: 'How responsible exploration practices are reshaping the mining sector.',
    date: 'June 28, 2024',
    author: 'Chioma Nwosu',
    slug: 'sustainable-mineral-exploration',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop'
  },
  {
    title: 'GIS Technology Transforming Geotechnical Surveys',
    category: 'GIS & Technology',
    excerpt: 'Advanced mapping and spatial analysis revolutionizing geotechnical investigations.',
    date: 'June 25, 2024',
    author: 'Prof. Ibrahim Hassan',
    slug: 'gis-geotechnical-surveys',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=500&fit=crop'
  },
  {
    title: 'Water Security and Hydrogeological Assessment',
    category: 'Water Resources',
    excerpt: 'Understanding groundwater potential for long-term water security in Nigeria.',
    date: 'June 20, 2024',
    author: 'Dr. Zainab Adeyemi',
    slug: 'water-security-hydrogeology',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop'
  },
  {
    title: 'Compliance and Regulatory Framework Update',
    category: 'Regulatory Compliance',
    excerpt: 'Latest updates on environmental and mining regulations affecting organizations.',
    date: 'June 15, 2024',
    author: 'Legal Team',
    slug: 'compliance-regulatory-update',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
  },
  {
    title: 'Climate Change Impact on Infrastructure Development',
    category: 'Environmental Sustainability',
    excerpt: 'Assessing climate resilience in infrastructure projects and planning.',
    date: 'June 10, 2024',
    author: 'Dr. Amina Mohammed',
    slug: 'climate-infrastructure-resilience',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop'
  }
]
