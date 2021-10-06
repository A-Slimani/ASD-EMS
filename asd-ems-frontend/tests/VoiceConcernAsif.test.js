const handleApplication = require('./Application');

const handleComplaint = require('./Application');

const handleConcern = require('./Application')



test("voice concern with correct data format input", () => {

    const name = "bob";

    const methodachievement = "rob";

    const achivementgoal = "slow work progress";

    const topic = "general";

    const discussdate = "1/1/2020";

    expect(handleConcern(name, methodachievement, achivementgoal, topic, discussdate)).toBe(true);

})



test("voice concern with incorrect data format input - number in textfield", () => {

    const name = "bob123 wrong data";

    const methodachievement = "rob123 wrong data";

    const achivementgoal = "slow work progress";

    const topic = "general123 wrong data";

    const discussdate = "1/1/2020";

    expect(handleConcern(name, methodachievement, achivementgoal, topic, discussdate)).toBe(false);

})