
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, FileText, TrendingUp, DollarSign, Calendar, CheckCircle } from 'lucide-react';

interface ReportAreaProps {
  reportData: any;
}

export function ReportArea({ reportData }: ReportAreaProps) {
  const handleDownload = (format: 'pdf' | 'docx') => {
    // TODO: Implement download functionality
    console.log(`Downloading report as ${format}`);
  };

  const handleCopyToClipboard = () => {
    // TODO: Implement copy functionality
    console.log('Copying report to clipboard');
  };

  if (!reportData) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Report Preview</h3>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <FileText className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Report Generated Yet
            </h3>
            <p className="text-gray-500 max-w-sm">
              Complete your conversation to generate a comprehensive AI cost analysis report
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Cost Analysis Report</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <div className="relative">
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              {/* TODO: Add dropdown for format selection */}
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {/* Executive Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary-500" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {reportData.executiveSummary}
              </p>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Annual Cost</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${reportData.totalCost?.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Cost</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${reportData.monthlyCost?.toLocaleString()}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="text-2xl font-bold text-green-600">
                      {reportData.roi}%
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Payback Period</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {reportData.paybackPeriod} months
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cost Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">API Calls (GPT-3.5)</span>
                  <span className="font-semibold">$1,200/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">API Calls (GPT-4)</span>
                  <span className="font-semibold">$1,600/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Infrastructure</span>
                  <span className="font-semibold">$300/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Storage & Processing</span>
                  <span className="font-semibold">$100/month</span>
                </div>
                <div className="flex justify-between items-center py-2 font-semibold text-lg border-t border-gray-200 pt-4">
                  <span>Total Monthly Cost</span>
                  <span className="text-primary-600">${reportData.monthlyCost?.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Key Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {reportData.recommendations?.map((rec: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Model Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Model Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Model</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Cost/1K Tokens</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Monthly Cost</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 text-gray-700">GPT-3.5 Turbo</td>
                      <td className="py-2 text-gray-700">$0.002</td>
                      <td className="py-2 text-gray-700">$1,200</td>
                      <td className="py-2 text-gray-700">General queries (80%)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700">GPT-4</td>
                      <td className="py-2 text-gray-700">$0.03</td>
                      <td className="py-2 text-gray-700">$1,600</td>
                      <td className="py-2 text-gray-700">Complex analysis (20%)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700">Claude 3</td>
                      <td className="py-2 text-gray-700">$0.008</td>
                      <td className="py-2 text-gray-700">$480</td>
                      <td className="py-2 text-gray-700">Alternative option</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
