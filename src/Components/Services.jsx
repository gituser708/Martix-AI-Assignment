import {
  LightBulbIcon,
  CubeTransparentIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "AI Strategy",
      desc: "Tailored roadmaps to integrate AI into your business, ensuring ethical, scalable, and future-ready adoption.",
      icon: LightBulbIcon,
    },
    {
      title: "Custom Models",
      desc: "We design, train, and deploy machine learning models optimized for your unique industry challenges.",
      icon: CubeTransparentIcon,
    },
    {
      title: "Automation",
      desc: "Streamline workflows with intelligent automation solutions that save time and reduce costs.",
      icon: Cog6ToothIcon,
    },
    {
      title: "Data Analytics",
      desc: "Unlock insights from your data with advanced analytics dashboards and predictive modeling.",
      icon: ChartBarIcon,
    },
    {
      title: "AI Security",
      desc: "Protect your systems with AI-driven security monitoring, anomaly detection, and compliance tools.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Cloud AI Integration",
      desc: "Seamlessly integrate AI services into cloud platforms for scalable, high-performance solutions.",
      icon: CloudIcon,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 flex flex-col items-center text-center"
          >
            <s.icon className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
