import Pricing from '../entities/pricing.js'
import Days from '../entities/days.js'
import Levels from '../entities/level.js'

function Relations() {
    
    Days.hasMany(Pricing, { foreignKey: 'daysId' });
    Pricing.belongsTo(Days, { foreignKey: 'daysId' });

    Levels.hasMany(Pricing, { foreignKey: 'levelId' });
    Pricing.belongsTo(Levels, { foreignKey: 'levelId' });
    
}
export default Relations