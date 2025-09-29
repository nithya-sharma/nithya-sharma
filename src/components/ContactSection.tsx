import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Send,
  CheckCircle,
  Github,
  Twitter,
  Globe,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nithya4434@gmail.com',
      href: 'mailto:nithya4434@gmail.com',
      description: 'Best for detailed inquiries'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/nithya-sharma01/',
      href: 'https://www.linkedin.com/in/nithya-sharma01/',
      description: 'Professional networking'
    },
    // {
    //   icon: Calendar,
    //   label: 'Schedule Call',
    //   value: 'Book a meeting',
    //   href: '#',
    //   description: '15-30 min project discussions'
    // }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nithya-sharma', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nithya-sharma01/', label: 'LinkedIn' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    // { icon: Globe, href: '#', label: 'Personal Blog' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's <span className="gradient-text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to discuss tech projects, creative collaborations, or just connect professionally, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="reveal-up">
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to interesting conversations and new opportunities. 
                Whether you're a fellow developer, designer, or potential collaborator, 
                feel free to reach out.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.label}
                  className={`card-hover group animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <method.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{method.label}</h4>
                        <p className="text-primary font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-full bg-surface hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
<div className="reveal-up">
  <Card className="card-hover">
    <CardContent className="p-8">
      <div className="flex items-center space-x-3 mb-6">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-serif font-semibold">Send a Message</h3>
      </div>

      <form
        action="https://formspree.io/f/meorowrq"
        method="POST"
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="transition-all duration-300 focus:shadow-glow"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.nithya4434@gmail.com"
              className="transition-all duration-300 focus:shadow-glow"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What would you like to discuss?"
            className="transition-all duration-300 focus:shadow-glow"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell me about your idea, question, or how we might collaborate..."
            rows={5}
            className="transition-all duration-300 focus:shadow-glow resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full btn-gradient text-lg py-6"
        >
          <div className="flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </div>
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Your information is secure and will only be used to respond to your message.
      </p>
    </CardContent>
  </Card>

  <div className="mt-6 flex items-center space-x-3 text-sm text-muted-foreground">
    <CheckCircle className="w-4 h-4 text-green-500" />
    <span>I typically respond within 24 hours</span>
  </div>
</div>

          {/* <div className="reveal-up">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-serif font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.nithya4434@gmail.com"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your idea, question, or how we might collaborate..."
                      rows={5}
                      className="transition-all duration-300 focus:shadow-glow resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-gradient text-lg py-6 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Your information is secure and will only be used to respond to your message.
                </p>
              </CardContent>
            </Card>

            <div className="mt-6 flex items-center space-x-3 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>I typically respond within 24 hours</span>
            </div>
          </div> */}

        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 text-center reveal-up">
          <div className="bg-gradient-surface rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's explore ways to collaborate on projects, share ideas, or create something meaningful together. 
              Every impactful project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-lg px-8 py-3">
                Start the Conversation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3 border-2">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;

// import { useState } from 'react';
// import { 
//   Mail, 
//   MapPin, 
//   Phone, 
//   Send,
//   CheckCircle,
//   Github,
//   Linkedin,
//   Twitter,
//   MessageSquare,
//   Calendar,
//   Globe
// } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const contactMethods = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'your.email@example.com',
//       href: 'mailto:your.email@example.com',
//       description: 'Best for detailed inquiries'
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: '/in/yourprofile',
//       href: '#',
//       description: 'Professional networking'
//     },
//     {
//       icon: Calendar,
//       label: 'Schedule Call',
//       value: 'Book a meeting',
//       href: '#',
//       description: '15-30 min conversations'
//     }
//   ];

//   const socialLinks = [
//     { icon: Github, href: '#', label: 'GitHub' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Globe, href: '#', label: 'Personal Blog' }
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message sent successfully!",
//         description: "Thanks for reaching out. I'll get back to you within 24 hours.",
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   return (
//     <section id="contact" className="section-padding bg-background">
//       <div className="section-container">
//         {/* Section Header */}
//         <div className="text-center mb-16 reveal-up">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
//             Let's <span className="gradient-text-primary">Connect</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Whether you want to discuss MBA opportunities, collaborate on projects, 
//             or just chat about the intersection of technology and creativity
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Contact Information */}
//           <div className="reveal-up">
//             <div className="mb-12">
//               <h3 className="text-2xl font-serif font-semibold mb-6">
//                 Get in Touch
//               </h3>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 I'm always open to interesting conversations and new opportunities. 
//                 Whether you're a fellow MBA candidate, a potential collaborator, 
//                 or just someone who shares similar interests, I'd love to hear from you.
//               </p>
//             </div>

//             {/* Contact Methods */}
//             <div className="space-y-6 mb-12">
//               {contactMethods.map((method, index) => (
//                 <Card 
//                   key={method.label}
//                   className={`card-hover group animate-fade-in-up`}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
//                           <method.icon className="w-6 h-6" />
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-lg">{method.label}</h4>
//                         <p className="text-primary font-medium">{method.value}</p>
//                         <p className="text-sm text-muted-foreground">{method.description}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold mb-4">Follow My Journey</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map(({ icon: Icon, href, label }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     className="p-3 rounded-full bg-surface hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
//                     aria-label={label}
//                   >
//                     <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Current Status */}
//             <Card className="mt-8 bg-gradient-primary/5 border-primary/20">
//               {/* <CardContent className="p-6">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mt-2"></div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Currently Available</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Open for MBA networking, project collaborations, and interesting conversations. 
//                       Typically respond within 24 hours.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent> */}
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div className="reveal-up">
//             <Card className="card-hover">
//               <CardContent className="p-8">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <MessageSquare className="w-6 h-6 text-primary" />
//                   <h3 className="text-2xl font-serif font-semibold">Send a Message</h3>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Name & Email */}
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         placeholder="Your full name"
//                         className="transition-all duration-300 focus:shadow-glow"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="your.email@example.com"
//                         className="transition-all duration-300 focus:shadow-glow"
//                       />
//                     </div>
//                   </div>

//                   {/* Subject */}
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Subject *
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       type="text"
//                       required
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       placeholder="What would you like to discuss?"
//                       className="transition-all duration-300 focus:shadow-glow"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       required
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Tell me about your idea, question, or how we might collaborate..."
//                       rows={5}
//                       className="transition-all duration-300 focus:shadow-glow resize-none"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full btn-gradient text-lg py-6 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center space-x-2">
//                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                         <span>Sending...</span>
//                       </div>
//                     ) : (
//                       <div className="flex items-center space-x-2">
//                         <Send className="w-5 h-5" />
//                         <span>Send Message</span>
//                       </div>
//                     )}
//                   </Button>
//                 </form>

//                 {/* Privacy Note */}
//                 <p className="text-xs text-muted-foreground mt-4 text-center">
//                   Your information is secure and will only be used to respond to your message.
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Quick Response Promise */}
//             <div className="mt-6 flex items-center space-x-3 text-sm text-muted-foreground">
//               <CheckCircle className="w-4 h-4 text-green-500" />
//               <span>I typically respond within 24 hours</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center reveal-up">
//           <div className="bg-gradient-surface rounded-3xl p-12 max-w-4xl mx-auto">
//             <h3 className="text-3xl font-serif font-bold mb-4">
//               Ready to Make an Impact Together?
//             </h3>
//             <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
//               From MBA applications to innovative tech projects, let's explore how we can 
//               create something meaningful. Every great collaboration starts with a conversation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="btn-gradient text-lg px-8 py-3">
//                 Start the Conversation
//               </Button>
//               <Button variant="outline" className="text-lg px-8 py-3 border-2">
//                 Schedule a Call
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;