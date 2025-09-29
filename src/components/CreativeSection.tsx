import { useState } from 'react';
import { 
  Palette, 
  BookOpen, 
  Quote, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import creativeBg from '@/assets/creative-bg.jpg';

const CreativeSection = () => {
  const [activeGallery, setActiveGallery] = useState('art');

  const inspirationalQuotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      context: "On innovation and technology"
    },
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      context: "On user experience"
    },
    {
      text: "Data is a precious thing and will last longer than the systems themselves.",
      author: "Tim Berners-Lee",
      context: "On data stewardship"
    }
  ];

  return (
    <section id="creative" className="section-padding bg-surface">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Creative <span className="gradient-text-creative">Expression</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {/* Where art meets analytics -  */}
            Exploring creativity through visual design, 
            literary inspiration, and thoughtful curation
          </p>
        </div>

        {/* Creative Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-20 h-80">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
   <source src="/videos/pin.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div 
  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/20 to-transparent" />

  {/* Foreground Content */}
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <div className="max-w-2xl px-6">
      <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
      <h3 className="text-3xl font-serif font-bold text-white mb-4">
        "Creativity is intelligence having fun"
      </h3>
      <p className="text-white/90 text-lg">
        Exploring the intersection of analytical thinking and artistic expression
      </p>
    </div>
  </div>
</div>

        {/* <div 
          className="relative rounded-3xl overflow-hidden mb-20 h-80"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${creativeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-6">
              <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                "Creativity is intelligence having fun"
              </h3>
              <p className="text-white/90 text-lg">
                Exploring the intersection of analytical thinking and artistic expression
              </p>
            </div>
          </div>
        </div> */}

        {/* Gallery Navigation */}
        <div className="flex justify-center mb-12 reveal-up">
          <div className="flex space-x-1 bg-surface-elevated rounded-full p-1">
            {[
              { id: 'art', label: 'Visual Art', icon: Palette },
              { id: 'books', label: 'Book Moodboards', icon: BookOpen },
              // { id: 'quotes', label: 'Inspiration', icon: Quote }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveGallery(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeGallery === id 
                    ? 'bg-creative text-creative-foreground shadow-creative' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content */}
        <div className="min-h-[400px]">
          {/* Art Gallery */}
          {activeGallery === 'art' && (
            <div className="text-center animate-fade-in-up">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Visual Explorations
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                See my artwork, crafts, and digital explorations on Instagram
              </p>
              <Button 
                asChild 
                className="btn-gradient text-lg px-8 py-3"
              >
                <a 
                  href="https://www.instagram.com/artsynithya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Instagram
                </a>
              </Button>
            </div>
          )}

          {/* Book Moodboards */}
          {activeGallery === 'books' && (
            <div className="text-center animate-fade-in-up">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Literary Inspiration
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore my curated reading moodboards on Pinterest
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="https://in.pinterest.com/nithya_sharma/books/2022/" target="_blank" rel="noopener noreferrer">
                    2022 Reads
                  </a>
                </Button>
                <Button asChild>
                  <a href="https://in.pinterest.com/nithya_sharma/books/2023/" target="_blank" rel="noopener noreferrer">
                    2023 Reads
                  </a>
                </Button>
                {/* Future boards */}
                <Button asChild>
                  <a href="https://in.pinterest.com/nithya_sharma/books/2024/" target="_blank" rel="noopener noreferrer">
                    2024 Reads
                  </a>
                </Button>
                <Button asChild>
                  <a href="https://in.pinterest.com/nithya_sharma/books/2025/" target="_blank" rel="noopener noreferrer">
                    2025 Reads
                  </a>
                </Button>
              
              </div>
            </div>
          )}

          {/* Inspirational Quotes */}
          {activeGallery === 'quotes' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Words That Inspire
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Thoughtful quotes and reflections that fuel my curiosity and 
                  drive for continuous learning and innovation.
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-8">
                {inspirationalQuotes.map((quote, index) => (
                  <Card key={index} className="p-8 animate-fade-in-up">
                    <blockquote className="text-xl font-serif italic text-foreground mb-4">
                      "{quote.text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-creative">{quote.author}</p>
                        <p className="text-sm text-muted-foreground">{quote.context}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;

// import { useState } from 'react';
// import { 
//   Palette, 
//   BookOpen, 
//   Quote, 
//   Heart,
//   ArrowRight,
//   Grid3X3,
//   Image as ImageIcon,
//   Sparkles
// } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import creativeBg from '@/assets/creative-bg.jpg';

// const CreativeSection = () => {
//   const [activeGallery, setActiveGallery] = useState('art');

//   const artworks = [
//     {
//       id: 1,
//       title: 'Digital Harmony',
//       medium: 'Digital Art',
//       year: '2024',
//       description: 'Exploring the intersection of technology and nature',
//       colors: ['#4F46E5', '#EC4899', '#F59E0B']
//     },
//     {
//       id: 2,
//       title: 'Data Visualization Study',
//       medium: 'Mixed Media',
//       year: '2023',
//       description: 'Transforming complex data into beautiful visual narratives',
//       colors: ['#10B981', '#3B82F6', '#8B5CF6']
//     },
//     {
//       id: 3,
//       title: 'Algorithmic Dreams',
//       medium: 'Generative Art',
//       year: '2024',
//       description: 'AI-generated artwork exploring computational creativity',
//       colors: ['#EF4444', '#F97316', '#84CC16']
//     }
//   ];

//   const bookMoodboards = [
//     {
//       id: 1,
//       title: 'The Design of Everyday Things',
//       author: 'Don Norman',
//       genre: 'Design',
//       mood: 'Minimalist & Functional',
//       colors: ['#F3F4F6', '#6B7280', '#111827'],
//       reflection: 'A masterclass in user-centered design thinking'
//     },
//     {
//       id: 2,
//       title: 'Sapiens',
//       author: 'Yuval Noah Harari',
//       genre: 'History',
//       mood: 'Expansive & Contemplative',
//       colors: ['#FEF3C7', '#D97706', '#92400E'],
//       reflection: 'Reshaping how I think about human progress and technology'
//     },
//     {
//       id: 3,
//       title: 'The Power of Now',
//       author: 'Eckhart Tolle',
//       genre: 'Philosophy',
//       mood: 'Serene & Grounding',
//       colors: ['#ECFDF5', '#059669', '#064E3B'],
//       reflection: 'Finding balance between ambition and presence'
//     }
//   ];

//   const inspirationalQuotes = [
//     {
//       text: "The best way to predict the future is to invent it.",
//       author: "Alan Kay",
//       context: "On innovation and technology"
//     },
//     {
//       text: "Design is not just what it looks like and feels like. Design is how it works.",
//       author: "Steve Jobs",
//       context: "On user experience"
//     },
//     {
//       text: "Data is a precious thing and will last longer than the systems themselves.",
//       author: "Tim Berners-Lee",
//       context: "On data stewardship"
//     }
//   ];

//   return (
//     <section id="creative" className="section-padding bg-surface">
//       <div className="section-container">
//         {/* Section Header */}
//         <div className="text-center mb-16 reveal-up">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
//             Creative <span className="gradient-text-creative">Expression</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Where art meets analytics - exploring creativity through visual design, 
//             literary inspiration, and thoughtful curation
//           </p>
//         </div>

//         {/* Creative Hero Section */}
//         <div 
//           className="relative rounded-3xl overflow-hidden mb-20 h-80"
//           style={{
//             backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${creativeBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         >
//           <div className="absolute inset-0 flex items-center justify-center text-center">
//             <div className="max-w-2xl px-6">
//               <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
//               <h3 className="text-3xl font-serif font-bold text-white mb-4">
//                 "Creativity is intelligence having fun"
//               </h3>
//               <p className="text-white/90 text-lg">
//                 Exploring the intersection of analytical thinking and artistic expression
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Gallery Navigation */}
//         <div className="flex justify-center mb-12 reveal-up">
//           <div className="flex space-x-1 bg-surface-elevated rounded-full p-1">
//             {[
//               { id: 'art', label: 'Visual Art', icon: Palette },
//               { id: 'books', label: 'Book Moodboards', icon: BookOpen },
//               { id: 'quotes', label: 'Inspiration', icon: Quote }
//             ].map(({ id, label, icon: Icon }) => (
//               <button
//                 key={id}
//                 onClick={() => setActiveGallery(id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
//                   activeGallery === id 
//                     ? 'bg-creative text-creative-foreground shadow-creative' 
//                     : 'text-muted-foreground hover:text-foreground'
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 <span className="font-medium">{label}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Content */}
//         <div className="min-h-[600px]">
//           {/* Art Gallery */}
//           {activeGallery === 'art' && (
//             <div className="animate-fade-in-up">
//               <div className="text-center mb-12">
//                 <h3 className="text-2xl font-serif font-semibold mb-4">
//                   Visual Explorations
//                 </h3>
//                 <p className="text-muted-foreground max-w-2xl mx-auto">
//                   A collection of digital art, generative pieces, and design experiments 
//                   that explore themes of technology, data, and human connection.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {artworks.map((artwork, index) => (
//                   <Card 
//                     key={artwork.id}
//                     className={`card-hover group overflow-hidden animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {/* Artwork Preview */}
//                     <div className="aspect-square relative overflow-hidden bg-gradient-surface">
//                       <div className="absolute inset-0 p-8">
//                         {/* Color Palette Preview */}
//                         <div className="flex space-x-2 mb-4">
//                           {artwork.colors.map((color, i) => (
//                             <div 
//                               key={i}
//                               className="w-4 h-4 rounded-full shadow-sm"
//                               style={{ backgroundColor: color }}
//                             />
//                           ))}
//                         </div>
                        
//                         {/* Abstract Art Representation */}
//                         <div className="relative h-full rounded-lg overflow-hidden">
//                           <div 
//                             className="absolute inset-0 opacity-60"
//                             style={{
//                               background: `linear-gradient(135deg, ${artwork.colors[0]}, ${artwork.colors[1]})`
//                             }}
//                           />
//                           <div 
//                             className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-40 rounded-tl-3xl"
//                             style={{ backgroundColor: artwork.colors[2] }}
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <ImageIcon className="w-12 h-12 text-white/70" />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Hover Overlay */}
//                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <Button variant="secondary" size="sm">
//                           View Full Size
//                         </Button>
//                       </div>
//                     </div>

//                     <CardContent className="p-6">
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-semibold">{artwork.title}</h4>
//                         <Badge variant="outline" className="text-xs">
//                           {artwork.year}
//                         </Badge>
//                       </div>
//                       <p className="text-sm text-creative mb-2">{artwork.medium}</p>
//                       <p className="text-muted-foreground text-sm">
//                         {artwork.description}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Book Moodboards */}
//           {activeGallery === 'books' && (
//             <div className="animate-fade-in-up">
//               <div className="text-center mb-12">
//                 <h3 className="text-2xl font-serif font-semibold mb-4">
//                   Literary Inspiration
//                 </h3>
//                 <p className="text-muted-foreground max-w-2xl mx-auto">
//                   Visual moodboards for books that have shaped my thinking, 
//                   connecting literature with aesthetic expression and personal reflection.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {bookMoodboards.map((book, index) => (
//                   <Card 
//                     key={book.id}
//                     className={`card-hover group overflow-hidden animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {/* Book Moodboard */}
//                     <div className="aspect-[4/5] relative overflow-hidden">
//                       <div 
//                         className="absolute inset-0"
//                         style={{
//                           background: `linear-gradient(135deg, ${book.colors[0]}, ${book.colors[1]}, ${book.colors[2]})`
//                         }}
//                       />
                      
//                       {/* Decorative Elements */}
//                       <div className="absolute inset-0 p-6 flex flex-col justify-between">
//                         <div>
//                           <div className="w-16 h-1 bg-white/30 mb-4" />
//                           <div className="w-24 h-1 bg-white/20 mb-2" />
//                           <div className="w-20 h-1 bg-white/20" />
//                         </div>
                        
//                         <div className="text-right">
//                           <BookOpen className="w-8 h-8 text-white/40 mb-2 ml-auto" />
//                           <div className="text-xs text-white/60 font-medium">
//                             {book.genre}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
//                     </div>

//                     <CardContent className="p-6">
//                       <h4 className="font-serif font-semibold mb-1">{book.title}</h4>
//                       <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
//                       <p className="text-sm italic text-creative mb-3">"{book.mood}"</p>
//                       <p className="text-xs text-muted-foreground">
//                         {book.reflection}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Inspirational Quotes */}
//           {activeGallery === 'quotes' && (
//             <div className="animate-fade-in-up">
//               <div className="text-center mb-12">
//                 <h3 className="text-2xl font-serif font-semibold mb-4">
//                   Words That Inspire
//                 </h3>
//                 <p className="text-muted-foreground max-w-2xl mx-auto">
//                   Thoughtful quotes and reflections that fuel my curiosity and 
//                   drive for continuous learning and innovation.
//                 </p>
//               </div>

//               <div className="max-w-4xl mx-auto space-y-8">
//                 {inspirationalQuotes.map((quote, index) => (
//                   <Card 
//                     key={index}
//                     className={`card-hover p-8 animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 200}ms` }}
//                   >
//                     <div className="flex items-start space-x-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-12 h-12 rounded-full bg-gradient-creative flex items-center justify-center">
//                           <Quote className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <blockquote className="text-xl font-serif italic text-foreground mb-4">
//                           "{quote.text}"
//                         </blockquote>
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="font-semibold text-creative">{quote.author}</p>
//                             <p className="text-sm text-muted-foreground">{quote.context}</p>
//                           </div>
//                           <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer" />
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Creative CTA */}
//         <div className="mt-20 text-center reveal-up">
//           <div className="bg-gradient-creative/10 rounded-3xl p-12 max-w-3xl mx-auto">
//             <Palette className="w-16 h-16 text-creative mx-auto mb-6" />
//             <h3 className="text-3xl font-serif font-bold mb-4">
//               Let's Create Together
//             </h3>
//             <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
//               Whether it's a data visualization, creative collaboration, or just sharing 
//               inspiration, I'd love to connect with fellow creators and thinkers.
//             </p>
//             <Button className="btn-gradient text-lg px-8 py-3">
//               Start a Conversation
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreativeSection;