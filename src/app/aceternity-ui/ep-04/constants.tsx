import {
    Gauge,
    Globe,
    Layers,
    LayoutGrid,
    Lock,
    Rocket,
    ShieldCheck,
    Sparkles,
    Wand2,
    Zap,
} from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

export type Feature = {
  readonly title: string;
  readonly icon: ReactNode;
  readonly description: string;
  readonly content: ReactNode;
};

export const features = [
  {
    title: "Fast Product Launch",
    icon: <Rocket className="h-8 w-8 text-stone-300" />,
    description:
      "Launch new features at speed with a streamlined development workflow that minimizes friction and maximizes delivery efficiency.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=1"
          alt="Fast product launch"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Built-in Security",
    icon: <ShieldCheck className="h-8 w-8 text-stone-300" />,
    description:
      "Protect your application with security measures baked into every layer, ensuring safety and compliance by default.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=2"
          alt="Built-in security"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Delightful Experience",
    icon: <Sparkles className="h-8 w-8 text-stone-300" />,
    description:
      "Create delightful user experiences through refined interactions, subtle animations, and thoughtful design details.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=3"
          alt="Delightful experience"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Composable Architecture",
    icon: <Layers className="h-8 w-8 text-stone-300" />,
    description:
      "Build modular systems that scale effortlessly by composing reusable layers without increasing complexity.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=4"
          alt="Composable architecture"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "High Performance",
    icon: <Gauge className="h-8 w-8 text-stone-300" />,
    description:
      "Ensure consistently fast performance with optimizations designed to deliver smooth and responsive experiences.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=5"
          alt="High performance"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Global Scale",
    icon: <Globe className="h-8 w-8 text-stone-300" />,
    description:
      "Reach users across the globe with infrastructure ready to handle growth, traffic spikes, and diverse regions.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=6"
          alt="Global scale"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Smart Automation",
    icon: <Wand2 className="h-8 w-8 text-stone-300" />,
    description:
      "Automate repetitive tasks intelligently and empower teams to focus on work that drives real impact.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=7"
          alt="Smart automation"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Privacy First",
    icon: <Lock className="h-8 w-8 text-stone-300" />,
    description:
      "Design with privacy in mind, giving full control over data access, permissions, and user trust.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=8"
          alt="Privacy first"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Flexible Layouts",
    icon: <LayoutGrid className="h-8 w-8 text-stone-300" />,
    description:
      "Adapt seamlessly to different screen sizes with flexible layouts that maintain clarity and consistency.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=9"
          alt="Flexible layouts"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Instant Feedback",
    icon: <Zap className="h-8 w-8 text-stone-300" />,
    description:
      "Enable fast iteration with instant feedback loops that help teams learn, adapt, and improve continuously.",
    content: (
      <div>
        <Image
          src="https://picsum.photos/500/500?random=10"
          alt="Instant feedback"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];

