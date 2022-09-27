import React, {useState} from "react";


function NewBoxForm({ addBox }) {
    const initialFormData = {
        boxColor: '',
        boxWidth: 100,
        boxHeight: 100
    };

    const [formData, setFormData] = useState(initialFormData);

    function handleFormChangeInputData(e){
        const {name, value} = e.target;
        setFormData(data => ({...formData, [name]: value}));
    }

    function handleFormSubmit(e){
        e.preventDefault();
        const newBoxData = {
            boxColor: formData.boxColor,
            boxWidth: Number(formData.boxWidth),
            boxHeight: Number(formData.boxHeight)
        };
        addBox(newBoxData);
        setFormData(initialFormData);
    }

    return (
        <form id="NewBoxForm" onSubmit={handleFormSubmit}>
            <label htmlFor="NewBoxForm-input-color">Background Color:</label>
            <input  type="text"
                    placeholder="Background Color"
                    id="NewBoxForm-input-color"
                    name="boxColor"
                    value={formData.boxColor}
                    onChange={handleFormChangeInputData}
            />
            <label htmlFor="NewBoxForm-input-width">Box width: (25-400)</label>
            <input  type="range"
                    id="NewBoxForm-input-width"
                    name="boxWidth"
                    min={25}
                    max={400}
                    step={25}
                    value={formData.boxWidth}
                    onChange={handleFormChangeInputData}
            />
            <label htmlFor="NewBoxForm-input-height">Box Height: (25-300)</label>
            <input  type="range"
                    id="NewBoxForm-input-height"
                    name="boxHeight"
                    min={25}
                    max={300}
                    step={25}
                    value={formData.boxHeight}
                    onChange={handleFormChangeInputData}
            />
            <button>Create New Box</button>
        </form>
    )
};

export default NewBoxForm;
