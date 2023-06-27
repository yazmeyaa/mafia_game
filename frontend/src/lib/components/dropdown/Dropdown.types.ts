export interface DropdownItem {
    text: string;
    onClick: (item: DropdownItem) => void;
}

export type DropdownItemsList = Array<DropdownItem>