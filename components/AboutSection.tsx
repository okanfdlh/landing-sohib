import React from 'react';
import { Target, Users, Rocket, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              About Sohib Coding
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded in early 2025, we're a fresh yet experienced freelance tech brand 
              dedicated to bringing digital transformation to businesses of all sizes.
            </p>
          </div>
          
          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h3 className="font-inter text-2xl font-semibold text-primary">Our Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since our founding in early 2025, Sohib Coding has rapidly established itself 
                  as a trusted partner for digital innovation. With over 10 successful projects 
                  completed, we've helped startups launch their first products and assisted 
                  established businesses modernize their digital presence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines cutting-edge technology with practical business solutions, 
                  ensuring every project delivers real value and drives measurable results.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary">10+ Projects Completed</div>
                  <div className="text-sm text-muted-foreground">Across various industries and technologies</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Helping digitalize small businesses and startups by providing 
                      modern, scalable, and user-friendly technology solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent-green-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To be the go-to partner for businesses seeking reliable, 
                      innovative digital solutions that drive growth and success.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-accent-yellow-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Values</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Quality, transparency, and client success drive everything we do. 
                      We believe in building long-term partnerships, not just projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;