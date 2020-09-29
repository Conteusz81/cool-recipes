import { useReducer } from 'react';

interface IReducerAction {
    field: string;
    value: string;
}

interface ILogin {
    email: string;
    password: string;
}

type IUseFormState = ILogin;

interface IChangeEvent {
    target: {
        id: string;
        value: string;
    };
}

const reducer = (state: IUseFormState, { field, value }: IReducerAction) => {
    return {
        ...state,
        [field]: value
    };
};

const useForm = (initialState: IUseFormState): { state: IUseFormState; handleChange: (e: IChangeEvent) => void; } => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: IChangeEvent) => {
        dispatch({ field: e.target.id, value: e.target.value });
    };

    return { state, handleChange };
};

export default useForm;
