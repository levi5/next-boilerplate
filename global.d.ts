declare global {
	interface String {
		$capitalize(): string;
		$generateStringVariations(): Array<string>;
		$normalize(from: RegExp | string, to: string): string;
		$replaceSpecialCharacter(): string;
		$strip(): string;
		$swapCharacter(from: RegExp | string, to: string): string;
	}
	interface Array {
		$uniqueArray<T>(propertyName: string): T[];
	}

	interface Date {
		$formatBrazilianDate(): string;
		$time(): { hours: string; minutes: string; seconds: string };
		$timeDifference(timeUTC: string): { hours: number; minutes: number };
		$weekday(
			locales?: Intl.LocalesArgument,
			variant: 'long' | 'short' | 'narrow',
			format?: string
		): string;
		$dayMonthYear(): { day: string; month: string; year: string };
	}

	interface Number {
		$convertToPrice(
			locales: string,
			options?: Intl.NumberFormatOptions
		): string;
	}
}

export {}
