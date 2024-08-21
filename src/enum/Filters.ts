import { TEXT_SELECTORS } from "./Selectors";
import { NODARK_SELECTORS } from "../enum/Selectors";
import IToolConfig from "../types/IToolConfig";

export interface IFilters {
    [key: string]: IToolConfig
}

export const FILTERS: IFilters = {
    'dark-contrast': {
        styles: {
            'filter': 'invert()'
        },
        childrenSelector: NODARK_SELECTORS
    },
    'light-contrast': {
        styles: {
            'color': '#000',
            'fill': '#000',
            'background-color': '#FFF'
        },
        childrenSelector: TEXT_SELECTORS
    },
    'high-contrast': {
        styles: {
            'filter': 'contrast(125%)'
        }
    },
    'high-saturation': {
        styles: {
            'filter': 'saturate(200%)'
        }
    },
    'low-saturation': {
        styles: {
            'filter': 'saturate(50%)'
        }
    },
    'monochrome': {
        styles: {
            'filter': 'grayscale(100%)'
        }
    }
}

export default FILTERS