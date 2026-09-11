import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-glow hover:bg-brand-dark focus-visible:outline-offset-4",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-alt",
  ghost: "text-foreground hover:text-brand",
};

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as Omit<LinkButtonProps, "children" | "variant" | "className">;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
