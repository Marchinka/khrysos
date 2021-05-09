import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
	interface Palette {
		custom: {
			dropdown: string;
			icons: string;
			oddRow: string;
		};
		status: {
			go: string;
			warning: string;
			stop: string;
		};
	}
	interface PaletteOptions {
		custom: {
			dropdown: string;
			icons: string;
			oddRow: string;
		};
		status: {
			go: string;
			warning: string;
			stop: string;
		};
	}
}

export const theme = createMuiTheme({
	palette: {
		custom: {
			dropdown: '#efeded',
			icons: '#898989',
			oddRow: '#f9fafc'
		},
		primary: {
			main: '#2e528f'
		},
		secondary: {
			main: '#4ca9e5'
		},
		background: {
			default: '#fff',
			paper: '#d0d0d0'
		},
		text: {
			primary: '#101010',
			secondary: '#909090',
			disabled: '#5e5c5b'
		},
		// buttons
		action: {
			active: '#2e528f',
			// hover: "#",
			// selected: "#",
			// disabled: "#888888",
			disabledBackground: '#aaa'
		},
		status: {
			go: '#41b378',
			warning: '#f2d031',
			stop: '#d64b4b'
		}
	}
	// overrides: {

	// }
});
