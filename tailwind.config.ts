
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
					DEFAULT: '#667eea',
					foreground: '#ffffff',
					50: '#f0f3ff',
					100: '#e0e7ff',
					500: '#667eea',
					600: '#5a67d8',
					700: '#4c51bf'
				},
				secondary: {
					DEFAULT: '#764ba2',
					foreground: '#ffffff',
					50: '#faf5ff',
					100: '#f3e8ff',
					500: '#764ba2',
					600: '#653780'
				},
				accent: {
					DEFAULT: '#fa709a',
					foreground: '#ffffff',
					50: '#fef2f2',
					100: '#fee2e2'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
				'gradient-accent': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
				'gradient-subtle': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
				'gradient-background': 'linear-gradient(180deg, #fdfbfb 0%, #ebedee 100%)',
				'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #f093fb 25%, #fa709a 50%, #fee140 75%, #764ba2 100%)',
				'gradient-hero': 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 25%, rgba(250, 112, 154, 0.1) 75%, rgba(118, 75, 162, 0.1) 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'typing': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'typing': 'typing 1.4s infinite ease-in-out',
				'gradient': 'gradient 6s ease infinite',
				'shimmer': 'shimmer 2s infinite'
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'gradient': '0 4px 15px 0 rgba(102, 126, 234, 0.2)',
				'gradient-hover': '0 6px 20px 0 rgba(102, 126, 234, 0.3)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
