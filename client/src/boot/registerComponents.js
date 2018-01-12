import Injector from 'lib/Injector';
import UploadField from 'components/UploadField/UploadField';
import UploadFieldItem from 'components/UploadField/UploadFieldItem';
import AssetDropzone from 'components/AssetDropzone/AssetDropzone';
import InsertMediaModal from 'containers/InsertMediaModal/InsertMediaModal';
import PreviewImageField from 'components/PreviewImageField/PreviewImageField';
import ProportionConstraintField from 'components/ProportionConstraintField/ProportionConstraintField';
import HistoryList from 'containers/HistoryList/HistoryList';

const registerComponents = () => {
  Injector.component.register('UploadField', UploadField);
  Injector.component.register('UploadFieldItem', UploadFieldItem);
  Injector.component.register('AssetDropzone', AssetDropzone);
  Injector.component.register('InsertMediaModal', InsertMediaModal);
  Injector.component.register('PreviewImageField', PreviewImageField);
  Injector.component.register('HistoryList', HistoryList);
  Injector.component.register('ProportionConstraintField', ProportionConstraintField);
};

export default registerComponents;
