import { Roboto_Mono, Bokor } from 'next/font/google';
import localFont from 'next/font/local';

export const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
});

export const bokor = Bokor({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bokor',
});

export const BBHSansHegartyRegular = localFont({
    src: './BBHSansHegarty-Regular.ttf',
});

export const BBHSansBogle = localFont({
    src: './BBHSansBogle-Regular.ttf',
});
