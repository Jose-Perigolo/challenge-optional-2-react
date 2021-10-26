export interface FoodInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

export type AddFoodInterface = Omit<FoodInterface, "id" | "available">;
export type UpdateFoodInterface = Omit<FoodInterface, "id" | "available">;

export interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateFood: (food: UpdateFoodInterface) => Promise<void>;
    editingFood: FoodInterface;
}

export interface ModalAddFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: AddFoodInterface) => Promise<void>;
}

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children: JSX.Element
}

interface IconSVGProps {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}

interface Props {
    name: string
    icon:  ((props: IconSVGProps ) => JSX.Element) | null;
}

export type InputProps = JSX.IntrinsicElements['input'] & Props

export interface InputStylesProps {
    isFocused: boolean;
    isFilled: boolean;
}

export interface HeaderProps {
    openModal: () => void;
}

export interface FoodProps  {
    food: FoodInterface;
    handleEditFood: (food: FoodInterface) => void;
    handleDelete: (id: number) => Promise<void>;
}

export interface FoodStylesProps {
    available: boolean;
}