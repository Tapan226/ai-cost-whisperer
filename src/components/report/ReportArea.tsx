
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, FileText, TrendingUp, DollarSign, Target, CheckCircle } from 'lucide-react';

interface ReportAreaProps {
  reportData: any;
}

export function ReportArea({ reportData }: ReportAreaProps) {
  const handleDownload = (format: 'pdf' | 'docx') => {
    console.log(`Downloading report as ${format.toUpperCase()}`);
    // TODO: Implement actual download functionality
  };

  const handleCopy = () => {
    console.log('Copying report to clipboard');
    // TODO: Implement copy functionality
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="w-16 h-16 bg-gradient-subtle rounded-2xl flex items-center justify-center mb-6 shadow-gradient">
        <FileText className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        No Report Generated Yet
      </h3>
      <p className="text-gray-600 mb-6 max-w-sm">
        Complete your conversation with the AI advisor to generate a comprehensive cost analysis report.
      </p>
      <div className="text-sm text-gray-500">
        Your report will include:
      </div>
      <ul className="text-sm text-gray-600 mt-2 space-y-1">
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          Cost breakdown analysis
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          ROI projections
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          Optimization recommendations
        </li>
      </ul>
    </div>
  );

  const ReportContent = () => (
    <div className="space-y-6">
      {/* Executive Summary */}
      <Card className="card-glass border-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg gradient-text flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
              <div className="text-2xl font-bold">{reportData.totalCost}</div>
              <div className="text-sm opacity-80">Estimated Monthly Cost</div>
            </div>
            <div className="text-center p-4 bg-gradient-accent rounded-lg text-white">
              <div className="text-2xl font-bold">{reportData.savings}</div>
              <div className="text-sm opacity-80">Potential Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Analysis */}
      <Card className="card-glass border-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg gradient-text flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Cost Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-primary text-white">
                    <th className="text-left p-3 rounded-l-lg">Service</th>
                    <th className="text-left p-3">Model</th>
                    <th className="text-left p-3">Usage</th>
                    <th className="text-left p-3 rounded-r-lg">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Customer Support</td>
                    <td className="p-3">GPT-4</td>
                    <td className="p-3">10K tokens/day</td>
                    <td className="p-3 font-semibold">$1,200/mo</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Document Processing</td>
                    <td className="p-3">Claude-3</td>
                    <td className="p-3">5K tokens/day</td>
                    <td className="p-3 font-semibold">$800/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3">Analytics</td>
                    <td className="p-3">GPT-3.5</td>
                    <td className="p-3">15K tokens/day</td>
                    <td className="p-3 font-semibold">$450/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="card-glass border-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg gradient-text flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reportData.recommendations?.map((rec: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold gradient-text">
            Cost Analysis Report
          </h2>
          {reportData && (
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 hover:border-primary/50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                {/* TODO: Add dropdown menu for format selection */}
              </div>
              <Button
                size="sm"
                onClick={handleCopy}
                className="btn-gradient"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {reportData ? <ReportContent /> : <EmptyState />}
      </div>

      {/* Footer */}
      {reportData && (
        <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm">
          <div className="text-xs text-gray-500 text-center">
            Report generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
}
