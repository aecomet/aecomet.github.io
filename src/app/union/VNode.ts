// VNode で string で number
import Attributes from './Attributes';
import NodeType from './NodeType';

export default interface VNode {
  nodeName: keyof ElementTagNameMap;
  attributes: Attributes;
  children: NodeType[];
}