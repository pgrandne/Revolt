import { Dispatch, SetStateAction } from "react"
import { scene2Choices } from "@/utils/story"


const TelegramChoices = ({ stage, setStage, azadText, setAzadText, index }: {
    stage: number,
    setStage: Dispatch<SetStateAction<number>>,
    azadText: string[],
    setAzadText: Dispatch<SetStateAction<string[]>>,
    index: number
}) => {

    return (
        <>
            <button
                className="pl-2 py-1 text-left"
                onClick={() => {
                    setAzadText([...azadText, scene2Choices[index].choice1])
                    setStage(stage + 1)
                }}
            >{scene2Choices[index].choice1}</button>
            <button
                className="pl-2 py-1 text-left"
                onClick={() => {
                    setAzadText([...azadText, scene2Choices[index].choice1])
                    setStage(stage + 1)
                }}
            >{scene2Choices[index].choice2}</button>
        </>
    )
}

export default TelegramChoices