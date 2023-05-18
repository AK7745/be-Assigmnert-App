import Pricing from '../entities/pricing.js'
import Days from '../entities/days.js'
import Levels from '../entities/level.js'
import { Order } from './order-entity.js';
import documentType from './documentType.js';
import Subject from './subject-entity.js';

function Relations() {
    
    Days.hasMany(Pricing, { foreignKey: 'daysId' });
    Pricing.belongsTo(Days, { foreignKey: 'daysId' });

    Levels.hasMany(Pricing, { foreignKey: 'levelId' });
    Pricing.belongsTo(Levels, { foreignKey: 'levelId' });
    
    Levels.hasMany(Order, { foreignKey: 'levelId' });
    Order.belongsTo(Levels, { foreignKey: 'levelId' });

    Days.hasMany(Order, { foreignKey: 'daysId' });
    Order.belongsTo(Days, { foreignKey: 'daysId' });

    documentType.hasMany(Order, { foreignKey: 'documentId' });
    Order.belongsTo(documentType, { foreignKey: 'documentId' });

    Subject.hasMany(Order,{foreignKey: 'subjectId'});
    Order.belongsTo(Subject, { foreignKey: 'subjectId'})
}
export default Relations