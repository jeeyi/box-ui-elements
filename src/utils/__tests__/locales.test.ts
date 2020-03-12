import {
    getDisplayName,
    getDisplayNames,
    getDisplayNamesWithIds,
    getLocalizedName,
    getLocalizedNames,
    getLocalizedNamesWithIds,
} from '../locales';

describe('util/locales', () => {
    describe.each([
        [4, 'English (US)'],
        [59, 'English (UK)'],
        [10, 'Español'],
        [21, 'Français'],
        [19, '日本語'],
        [6, '简体中文'],
    ])('%o', (id, expected) => {
        test('should return display name given the id', () => {
            expect(getDisplayName(id)).toEqual(expected);
        });
    });
    test('should return display names in order', () => {
        expect(getDisplayNames()).toEqual([
            'English (US)',
            'English (UK)',
            'Dansk',
            'Deutsch',
            'English (Australia)',
            'English (Canada)',
            'Español',
            'Español (Latinoamérica)',
            'Français',
            'Français (Canada)',
            'Italiano',
            'Nederlands',
            'Norsk (Bokmål)',
            'Polski',
            'Português',
            'Suomi',
            'Svenska',
            'Türkçe',
            'Русский',
            'हिन्दी',
            'বাংলা',
            '日本語',
            '简体中文',
            '繁體中文',
            '한국어',
        ]);
    });
    test('should return display names with ids in order', () => {
        expect(getDisplayNamesWithIds()).toEqual([
            { id: 4, name: 'English (US)' },
            { id: 59, name: 'English (UK)' },
            { id: 68, name: 'Dansk' },
            { id: 18, name: 'Deutsch' },
            { id: 67, name: 'English (Australia)' },
            { id: 66, name: 'English (Canada)' },
            { id: 10, name: 'Español' },
            { id: 72, name: 'Español (Latinoamérica)' },
            { id: 21, name: 'Français' },
            { id: 65, name: 'Français (Canada)' },
            { id: 16, name: 'Italiano' },
            { id: 24, name: 'Nederlands' },
            { id: 69, name: 'Norsk (Bokmål)' },
            { id: 30, name: 'Polski' },
            { id: 14, name: 'Português' },
            { id: 61, name: 'Suomi' },
            { id: 57, name: 'Svenska' },
            { id: 49, name: 'Türkçe' },
            { id: 8, name: 'Русский' },
            { id: 71, name: 'हिन्दी' },
            { id: 70, name: 'বাংলা' },
            { id: 19, name: '日本語' },
            { id: 6, name: '简体中文' },
            { id: 63, name: '繁體中文' },
            { id: 55, name: '한국어' },
        ]);
    });
    describe.each([
        [4, 'English'],
        [59, 'British English'],
        [10, 'Spanish'],
        [21, 'French'],
        [19, 'Japanese'],
        [6, 'Simplified Chinese'],
    ])('%o', (id, expected) => {
        test('should return display name given the id', () => {
            expect(getLocalizedName(id)).toEqual(expected);
        });
    });
    test('should return localized names in order', () => {
        expect(getLocalizedNames()).toEqual([
            'Australian English',
            'Bangla',
            'British English',
            'Canadian English',
            'Canadian French',
            'Danish',
            'Dutch',
            'English',
            'Finnish',
            'French',
            'German',
            'Hindi',
            'Italian',
            'Japanese',
            'Korean',
            'Latin American Spanish',
            'Norwegian Bokmål',
            'Polish',
            'Portuguese',
            'Russian',
            'Simplified Chinese',
            'Spanish',
            'Swedish',
            'Traditional Chinese',
            'Turkish',
        ]);
    });
    test('should return localized names with ids in order', () => {
        expect(getLocalizedNamesWithIds()).toEqual([
            { id: 67, name: 'Australian English' },
            { id: 70, name: 'Bangla' },
            { id: 59, name: 'British English' },
            { id: 66, name: 'Canadian English' },
            { id: 65, name: 'Canadian French' },
            { id: 68, name: 'Danish' },
            { id: 24, name: 'Dutch' },
            { id: 4, name: 'English' },
            { id: 61, name: 'Finnish' },
            { id: 21, name: 'French' },
            { id: 18, name: 'German' },
            { id: 71, name: 'Hindi' },
            { id: 16, name: 'Italian' },
            { id: 19, name: 'Japanese' },
            { id: 55, name: 'Korean' },
            { id: 72, name: 'Latin American Spanish' },
            { id: 69, name: 'Norwegian Bokmål' },
            { id: 30, name: 'Polish' },
            { id: 14, name: 'Portuguese' },
            { id: 8, name: 'Russian' },
            { id: 6, name: 'Simplified Chinese' },
            { id: 10, name: 'Spanish' },
            { id: 57, name: 'Swedish' },
            { id: 63, name: 'Traditional Chinese' },
            { id: 49, name: 'Turkish' },
        ]);
    });
});
