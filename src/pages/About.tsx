
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary">About Beehive Cleaning</h1>
          <p className="mb-8 text-lg text-gray-600">
            We are dedicated to providing professional cleaning and maintenance services
            that exceed your expectations. Our team of experienced professionals ensures
            your space is maintained to the highest standards.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional cleaning services that create healthy, comfortable
              environments for our clients.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Our Values</h3>
            <p className="text-gray-600">
              Integrity, professionalism, and attention to detail guide everything we do.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Our Promise</h3>
            <p className="text-gray-600">
              100% satisfaction guaranteed with every service we provide.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
