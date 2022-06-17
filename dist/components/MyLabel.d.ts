/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
      * this is the message of the label
      */
    label?: string;
    /**
     * this is the options of the label: 'normal' , 'h1' , 'h2' , 'h3'
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
