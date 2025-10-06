import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, Target, Leaf, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Current Rating', value: user?.rating || 0, icon: Trophy, gradient: 'bg-gradient-forest' },
    { label: 'Level', value: user?.level || 1, icon: TrendingUp, gradient: 'bg-gradient-sky' },
    { label: 'League', value: user?.league || 'Bronze', icon: Award, gradient: 'bg-gradient-sunrise' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-forest rounded-2xl p-8 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username}! 🌱</h1>
          <p className="text-primary-foreground/90">
            Ready to make a positive impact today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.gradient}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-forest">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>Eco Actions</CardTitle>
                  <p className="text-sm text-muted-foreground">Complete actions to earn points</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/eco-actions">
                <Button className="w-full">View Actions</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-sky">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>Leaderboard</CardTitle>
                  <p className="text-sm text-muted-foreground">See how you rank globally</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/leaderboard">
                <Button variant="secondary" className="w-full">View Rankings</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Your Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <p>No recent activity yet.</p>
              <p className="text-sm mt-2">Complete eco actions to see your progress here!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
