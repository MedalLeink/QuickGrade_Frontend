interface QuestionWithOptionsProps {
  question: string;
  options: string[];
}

const QuestionWithOptions = (Props: QuestionWithOptionsProps) => (
  <div className="w-[841px] gap-16 mt-10">
    <div className="w-[841px] gap-8">
      <div className="w-[830px] gap-8">
        <ol className="list-decimal font-inter font-medium text-base leading-6 text-left -ml-56 -pl-28 mr-40">
          <li className="w-full px-3 py-2 pr-12 border border-solid border-gray-400">
            {Props.question}
          </li>
        </ol>
        <div className="w-[841px] gap-48 mt-8">
          <div className="w-[166px] gap-4 flex items-start">
            <ol className="list-none flex -ml-60">
              {Props.options.map((option, index) => (
                <li key={index} className="flex items-center ml-2 mr-28 -mt-5">
                  <label
                    htmlFor={`option${index + 1}`}
                    className="ml-2 text-md leading-5 text-gray-800 w-120 h-25 p-2 flex items-start -mb-10"
                  >
                    <span className="font-extrabold text-black mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {option}
                  </label>
                  <input
                    type="radio"
                    id={`option${index + 1}`}
                    name={`options-${Props.question}`}
                    className="form-radio h-4 w-4 transition duration-150 ease-in-out ml-2"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionWithOptions;
