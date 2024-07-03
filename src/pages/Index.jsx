import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-xl text-muted-foreground">
          The ultimate solution to streamline your business operations.
        </p>
        <Button size="lg" className="mt-4">
          Get Started
        </Button>
        <img
          src="https://placehold.co/600x400"
          alt="SaaS product illustration"
          className="mx-auto mt-8"
        />
      </section>

      <Separator />

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar className="mb-4" />
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This product has transformed our business!"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar className="mb-4" />
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Incredible features and amazing support."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar className="mb-4" />
              <CardTitle>Sam Wilson</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Highly recommend to any business."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Basic features for small businesses.</p>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>Advanced features for growing businesses.</p>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$100/month</p>
              <p>All features for large enterprises.</p>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </a>
        </div>
        <div className="space-x-4">
          <Badge>Facebook</Badge>
          <Badge>Twitter</Badge>
          <Badge>LinkedIn</Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;