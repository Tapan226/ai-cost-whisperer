
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Calculator, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  DollarSign,
  Lightbulb,
  FileText,
  Zap,
  Shield,
  Sparkles,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation isLanding={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(250, 112, 154, 0.1) 0%, transparent 50%)`
        }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart{' '}
              <span className="gradient-text">
                AI Investment
              </span>{' '}
              Decisions for Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant cost analysis, ROI projections, and optimization strategies 
              for your AI initiatives
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Button asChild className="btn-gradient text-lg px-8 py-3">
                <Link to="/dashboard">
                  Try Demo <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-gray-300 hover:border-primary/50 hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Enterprise Leaders Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make informed decisions with accurate data and clear insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-glass p-8 text-center hover:shadow-gradient-hover transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cost Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Precise calculations for any AI implementation with real-time pricing data 
                  from major providers
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass p-8 text-center hover:shadow-gradient-hover transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare models with data-driven insights tailored to your specific 
                  use case and budget
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass p-8 text-center hover:shadow-gradient-hover transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Clear ROI
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Visualize savings and payback periods with detailed financial 
                  projections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              From requirements to recommendations in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-gradient-primary opacity-30" />
            
            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-gradient relative z-10">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Describe Your AI Needs
              </h3>
              <p className="text-gray-600">
                Tell us about your project requirements, scale, and objectives
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-gradient relative z-10">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Comprehensive Analysis
              </h3>
              <p className="text-gray-600">
                Receive detailed cost breakdowns and optimization strategies
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-gradient relative z-10">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Make Confident Decisions
              </h3>
              <p className="text-gray-600">
                Export reports and present findings to stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Ready Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools for AI cost optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: BarChart3, 
                title: 'Real-time Pricing Data', 
                desc: 'Live pricing updates from all major AI providers',
                gradient: 'bg-gradient-primary'
              },
              { 
                icon: Target, 
                title: 'Multi-model Comparisons', 
                desc: 'Side-by-side analysis of different AI solutions',
                gradient: 'bg-gradient-secondary'
              },
              { 
                icon: DollarSign, 
                title: 'ROI & Payback Analysis', 
                desc: 'Detailed financial projections and break-even points',
                gradient: 'bg-gradient-accent'
              },
              { 
                icon: Lightbulb, 
                title: 'Optimization Strategies', 
                desc: 'AI-powered recommendations to reduce costs',
                gradient: 'bg-gradient-subtle'
              },
              { 
                icon: FileText, 
                title: 'Export Detailed Reports', 
                desc: 'Professional PDFs and documents for stakeholders',
                gradient: 'bg-gradient-primary'
              },
              { 
                icon: Shield, 
                title: 'Budget-friendly Options', 
                desc: 'Find cost-effective solutions within your budget',
                gradient: 'bg-gradient-secondary'
              },
            ].map((feature, index) => (
              <div key={index} className="card-glass p-6 rounded-xl hover:shadow-gradient transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
        }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your AI Investments?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join enterprise leaders making smarter AI decisions with data-driven insights
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-3 bg-white text-primary hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">
                    AI Cost Advisor
                  </div>
                  <div className="text-sm text-gray-400">
                    Smart AI investment decisions
                  </div>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Helping enterprise leaders make informed decisions about AI implementation costs and ROI with data-driven insights.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 AI Cost Advisor. All rights reserved.
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Trusted by enterprise leaders</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
