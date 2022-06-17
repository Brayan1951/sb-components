import './mylabel.css'


export interface Props {
  /**
    * this is the message of the label
    */
  label?: string
  /**
   * this is the options of the label: 'normal' , 'h1' , 'h2' , 'h3'
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  allCaps?: boolean
  color?: 'primary' | 'secondary' | 'tertiary'
  fontColor?: string
  backgroundColor?: string

}




export const MyLabel = ({ label = 'No label', size = 'normal', allCaps = false, color = 'primary', fontColor = '#5517ac', backgroundColor = 'transparent' }: Props) => {
  return (
    <span style={{ color: fontColor, backgroundColor }} className={`label ${size} text-${color}`}>{allCaps ? label.toUpperCase() : label}</span>)
}


export default MyLabel