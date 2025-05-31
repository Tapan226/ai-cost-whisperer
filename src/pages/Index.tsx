
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
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <Navigation isLanding={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Make Smarter{' '}
              <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                AI Investment
              </span>{' '}
              Decisions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant cost analysis, ROI projections, and optimization strategies 
              for your enterprise AI initiatives
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/signup">
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
            
            {/* Demo Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-sm font-medium">
              <Zap className="mr-2 h-4 w-4" />
              Hackathon Demo - Showcasing AI Cost Optimization Capabilities
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
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
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Accurate Cost Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Calculate exact costs for any AI implementation with real-time pricing data 
                  from major providers
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Recommendations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare models and get optimized solutions tailored to your specific 
                  use case and budget
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Clear ROI Projections
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  See payback periods and savings potential with detailed financial 
                  projections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From requirements to recommendations in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Describe Your AI Needs
              </h3>
              <p className="text-gray-600">
                Tell us about your project requirements, scale, and objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Comprehensive Analysis
              </h3>
              <p className="text-gray-600">
                Receive detailed cost breakdowns and optimization strategies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
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
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools for AI cost optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Real-time Cost Calculations', desc: 'Live pricing updates from all major AI providers' },
              { icon: Target, title: 'Multi-model Comparisons', desc: 'Side-by-side analysis of different AI solutions' },
              { icon: DollarSign, title: 'ROI & Payback Analysis', desc: 'Detailed financial projections and break-even points' },
              { icon: Lightbulb, title: 'Optimization Strategies', desc: 'AI-powered recommendations to reduce costs' },
              { icon: FileText, title: 'Export Detailed Reports', desc: 'Professional PDFs and documents for stakeholders' },
              { icon: Shield, title: 'Budget-friendly Options', desc: 'Find cost-effective solutions within your budget' },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <feature.icon className="h-8 w-8 text-primary-500 mb-4" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your AI Investments?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join enterprise leaders making smarter AI decisions with data-driven insights
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-3 bg-white text-primary-600 hover:bg-gray-50"
          >
            <Link to="/signup">
              Start Your Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 bg-primary-500 rounded-lg">
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
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built for Hackathon 2024</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
