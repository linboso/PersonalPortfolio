import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-purple-600 text-white hover:bg-green-500 hover:text-black shadow-lg shadow-purple-900/20 border border-transparent",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90",
        outline: "border border-purple-500/50 bg-transparent hover:bg-purple-900/20 text-purple-300 hover:text-green-400",
        secondary: "bg-purple-900/20 text-purple-100 hover:bg-purple-900/40 border border-purple-500/30",
        ghost: "bg-transparent hover:bg-purple-900/20 hover:text-green-400 text-neutral-400",
        link: "text-green-400 underline-offset-4 hover:underline",
        eva: "bg-green-500 text-black font-bold hover:bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] border border-green-400" // Special EVA variant
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
