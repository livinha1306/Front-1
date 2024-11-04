import React, { useEffect, useRef } from 'react';
import './styles.css';

export const AutoResizingTextarea = ({ value, onChange, ...props }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '25px'; // Altura mínima
            textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta para a altura do conteúdo
        }
    }, [value]);

    return (
        <div style={{ position: 'relative', height: 'auto', minHeight: '25px' }}>
            <textarea
                className="message-input"
                ref={textareaRef}
                value={value}
                onChange={e => onChange(e.target.value)}
                {...props}
            />
        </div>
    );
};
