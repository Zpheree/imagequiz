import flowers from "../temp_data_repo/flowers";
import data from '../temp_data_repo/quizdata';

let local_temp_store = {
    customers: [],
    getFlowers: () => {
        return flowers;
    },
    getQuiz: (name) => {
        let quiz = data.find(x => x.name.toLowerCase() === name.toLowerCase());
        return quiz;
    }
}

export default local_temp_store;