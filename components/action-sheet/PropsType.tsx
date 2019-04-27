import { Locale } from '../locale-provider/PropsType';

export type Action = {
  text: string,
  theme?: 'default' | 'primary' | 'danger',
  className?: string,
  onClick?: () => void,
};

export default interface PropsType {
  visible?: boolean;
  spacing?: boolean;
  actions: Action[];
  cancelText?: string;
  onMaskClick?: () => void;
  onCancel?: () => void;
  locale?: Locale;
}
