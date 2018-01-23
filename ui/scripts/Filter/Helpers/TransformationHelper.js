class TransformationHelper {
  static resetTransformations(filter) {
    // hide all entities
    events.filtered.on.publish({ sender: filterController, entities: filter.visualizedEntities });

    // make all entities opaque
    canvasManipulator.changeTransparencyOfEntities(filter.visualizedEntities, 0);

    // unselect all entities
    canvasManipulator.unhighlightEntities(filter.visualizedEntities);

    // reset color of relations & remove connectors
    canvasManipulator.resetColorOfEntities(filter.visualizedEntities);
    RelationHelper.removeAddedElements();

    // show all entities when filter is empty
    if (filter.containers.length < 1) {
      events.filtered.off.publish({
        sender: filterController,
        entities: filter.visualizedEntities
      });
    }
  }

  static makeEntitiesVisible(entityIds) {
    if (entityIds.length < 1) return;

    // get entities from entityIds & publish filtered.on event for entities
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);
    events.filtered.off.publish({ sender: filterController, entities: entities });
  }

  static makeEntitiesInvisible(entityIds) {
    if (entityIds.length < 1) return;

    // get entities from entityIds & publish filtered.on event for entities
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);
    events.filtered.on.publish({ sender: filterController, entities: entities });
  }

  static makeEntitiesOpaque(entityIds) {
    if (entityIds.length < 1) return;

    // get entities from entityIds & make requested entities opaque
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);
    canvasManipulator.changeTransparencyOfEntities(entities, 0);
  }

  static makeEntitiesTransparent(entityIds) {
    if (entityIds.length < 1) return;

    // get entities from entityIds & make requested entities translucent
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);
    canvasManipulator.changeTransparencyOfEntities(entities, 0.85);
  }

  static selectEntities(entityIds) {
    if (entityIds.length < 1) return;

    // get entities from entityIds & highlight requested entities
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);
    canvasManipulator.highlightEntities(entities, canvasManipulator.colors.darkred);
  }

  static connectEntities(entityIds, loadedPositions) {
    if (entityIds.length < 1) return;

    // remove connectors
    RelationHelper.removeAddedElements();

    let transformContainer = document.createElement('Transform');
    transformContainer.className = 'transformContainer';

    // get entities from entityIds
    let entities = entityIds.map(id => model.getEntityById(id)).filter(entity => entity != null);

    for (let ent of entities) {
      let relations = [];
      let fields = ['subTypes', 'superTypes', 'accessedBy', 'accesses', 'calls', 'calledBy'];

      for (let field of fields) {
        if (ent[field]) {
          relations = relations.concat(ent[field]);
          // console.log(field, ent[field], ent);
        }
      }

      // remove entities that aren't in selection
      relations = relations.filter(entity => entityIds.indexOf(entity.id) > -1);

      for (let j = 0; j < relations.length; j++) {
        let start = RelationHelper.getObjectPosition(ent.id, loadedPositions);
        let end = RelationHelper.getObjectPosition(relations[j].id, loadedPositions);

        if (start == null || end == null) continue;

        let color = '0 0.5 0.5';
        let size = 0.5;

        let transform = document.createElement('Transform');
        transform.className = 'expansionLine';
        transform.appendChild(RelationHelper.createLine(start, end, color, size));

        // color relations & add connector
        canvasManipulator.resetColorOfEntities([relations[j]]);
        canvasManipulator.changeColorOfEntities([relations[j]], color);
        transformContainer.appendChild(transform);
      }
    }

    canvasManipulator.addElement(transformContainer);
  }
}
