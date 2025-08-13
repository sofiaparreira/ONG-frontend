import { useState } from "react"

export default function useMainViewModel() {

    const chave_pix = "36278602000152"
    const [showTooltip, setShowTooltip] = useState<boolean>(false)

    const handleCopyPix = async () => {
        try {
            await navigator.clipboard.writeText(chave_pix)
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 400)
        } catch (error:unknown) {
            console.log("Erro ao copiar", error)
        }
    }

    return {showTooltip, handleCopyPix}
}