import { cn } from "@/lib/utils"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description: string
  faqs: FAQItem[]
  className?: string
}

export function FAQSection({ 
  title,
  description,
  faqs,
  className 
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className={cn(
      "py-12 sm:py-16 md:py-20 px-4 sm:px-6",
      className
    )}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 sm:mb-6 animate-slide-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-open-sans max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            {description}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const animationDelay = 0.6 + (index * 0.1);
            
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300 animate-slide-up opacity-0 [animation-fill-mode:forwards]`}
                style={{ animationDelay: `${animationDelay}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-green/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full text-left p-4 sm:p-5 focus:outline-none focus:ring-2 focus:ring-neon-green/50 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-white pr-6 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <Minus size={20} className="text-neon-green transition-transform duration-200" />
                      ) : (
                        <Plus size={20} className="text-neon-green transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="relative px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 sm:mt-12 md:mt-16 animate-fade-in opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards]">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
