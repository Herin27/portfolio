
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ocean: {
					50: "#e6f7f9",
					100: "#cceff3",
					200: "#99dfe7",
					300: "#66cfdb",
					400: "#33bfcf",
					500: "#00afc3",
					600: "#008c9c",
					700: "#006975",
					800: "#00464e",
					900: "#002327"
				},
				sand: {
					50: "#fbf8f2",
					100: "#f7f2e5",
					200: "#efe5cc",
					300: "#e7d8b2",
					400: "#dfcb99",
					500: "#d7be7f",
					600: "#ac9866",
					700: "#81724c",
					800: "#564c33",
					900: "#2b2619"
				},
				sunset: {
					50: "#fcf0e9",
					100: "#f9e2d3",
					200: "#f3c5a7",
					300: "#eda87b",
					400: "#e78b4f",
					500: "#e16e23",
					600: "#b4581c",
					700: "#874215",
					800: "#5a2c0e",
					900: "#2d1607"
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(20px)"
					}
				},
				"typing": {
					"0%": { width: "0%" },
					"100%": { width: "100%" }
				},
				"blink": {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "hsl(var(--primary))" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-up": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-right": {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"slide-down": {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"progress-fill": {
					"0%": { width: "0%" },
					"100%": { width: "var(--progress-value)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out forwards",
				"fade-out": "fade-out 0.6s ease-out forwards",
				"typing": "typing 3.5s steps(40, end), blink 0.75s step-end infinite",
				"float": "float 6s ease-in-out infinite",
				"pulse-soft": "pulse-soft 4s ease-in-out infinite",
				"scale-in": "scale-in 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
				"slide-up": "slide-up 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards",
				"slide-right": "slide-right 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards",
				"slide-down": "slide-down 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards",
				"progress-fill": "progress-fill 1.5s ease-out forwards",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right bottom, rgba(0, 175, 195, 0.6), rgba(45, 38, 25, 0.5))',
			},
			fontFamily: {
				'sans': ['Roboto', 'sans-serif'],
				'display': ['Poppins', 'sans-serif'],
				'mono': ['Fira Code', 'monospace']
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
